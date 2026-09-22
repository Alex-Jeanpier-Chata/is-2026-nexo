const fs = require('fs');
const path = require('path');

const PROPIETARIO = 'Alex-Jeanpier-Chata';
const REPOSITORIO = 'is-2026-nexo';
const DIAS_VENTANA = 21;
const SEMANAS_VENTANA = DIAS_VENTANA / 7;
const RAMA_PRINCIPAL = 'main';
const RAMA_INTEGRACION = 'develop';

const TOKEN = process.env.GITHUB_TOKEN;
const API_URL = `https://api.github.com/repos/${PROPIETARIO}/${REPOSITORIO}`;

const RUTA_SALIDA = path.join(
  __dirname,
  '..',
  'docs',
  'proceso',
  'panel-metricas',
  'metricas_raw.json'
);

if (!TOKEN) {
  console.error('No se encontró la variable de entorno GITHUB_TOKEN.');
  process.exit(1);
}

async function consultarGitHub(url) {
  const respuesta = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  if (!respuesta.ok) {
    throw new Error(
      `GitHub API respondió ${respuesta.status}: ${respuesta.statusText}`
    );
  }

  return respuesta.json();
}

async function obtenerPullRequestsCerrados() {
  return consultarGitHub(`${API_URL}/pulls?state=closed&per_page=100`);
}

async function obtenerCommitsPullRequest(numeroPr) {
  return consultarGitHub(`${API_URL}/pulls/${numeroPr}/commits?per_page=100`);
}

function obtenerVentanaTemporal() {
  const fin = new Date();
  const inicio = new Date(fin);

  inicio.setUTCDate(inicio.getUTCDate() - DIAS_VENTANA);

  return {
    inicio,
    fin
  };
}

function estaDentroVentana(fecha, inicio, fin) {
  const fechaEvaluada = new Date(fecha);

  return fechaEvaluada >= inicio && fechaEvaluada <= fin;
}

function calcularHoras(fechaInicio, fechaFin) {
  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);
  const diferencia = fin - inicio;
  const horas = diferencia / (1000 * 60 * 60);

  return Number(horas.toFixed(1));
}

function calcularPromedio(valores) {
  if (valores.length === 0) {
    return null;
  }

  const suma = valores.reduce((acumulado, valor) => acumulado + valor, 0);

  return Number((suma / valores.length).toFixed(1));
}

function calcularMediana(valores) {
  if (valores.length === 0) {
    return null;
  }

  const ordenados = [...valores].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    const mediana = (ordenados[mitad - 1] + ordenados[mitad]) / 2;

    return Number(mediana.toFixed(1));
  }

  return Number(ordenados[mitad].toFixed(1));
}

async function obtenerPrimerCommit(numeroPr) {
  const commits = await obtenerCommitsPullRequest(numeroPr);

  if (commits.length === 0) {
    return null;
  }

  const commitsOrdenados = [...commits].sort((a, b) => {
    const fechaA = new Date(a.commit.author.date);
    const fechaB = new Date(b.commit.author.date);

    return fechaA - fechaB;
  });

  const primerCommit = commitsOrdenados[0];

  return {
    sha: primerCommit.sha,
    fecha: primerCommit.commit.author.date
  };
}

async function procesarPullRequests(pullRequests, inicio, fin) {
  const fusionados = pullRequests.filter(
    (pr) =>
      pr.merged_at !== null &&
      estaDentroVentana(pr.merged_at, inicio, fin)
  );

  const resultados = [];

  for (const pr of fusionados) {
    const primerCommit = await obtenerPrimerCommit(pr.number);

    if (!primerCommit) {
      console.warn(`El PR #${pr.number} no contiene commits.`);
      continue;
    }

    const tiempoEntregaHoras = calcularHoras(
      primerCommit.fecha,
      pr.merged_at
    );

    resultados.push({
      numero: pr.number,
      titulo: pr.title,
      ramaOrigen: pr.head.ref,
      ramaDestino: pr.base.ref,
      primerCommit: {
        sha: primerCommit.sha,
        fecha: primerCommit.fecha
      },
      fechaIntegracion: pr.merged_at,
      tiempoEntregaHoras,
      url: pr.html_url
    });
  }

  return resultados;
}

function calcularTiempoEntrega(pullRequests) {
  const tiempos = pullRequests.map((pr) => pr.tiempoEntregaHoras);

  return {
    muestra: tiempos.length,
    promedioHoras: calcularPromedio(tiempos),
    medianaHoras: calcularMediana(tiempos)
  };
}

function calcularFrecuenciaIntegracion(pullRequests, rama) {
  const integraciones = pullRequests.filter(
    (pr) => pr.ramaDestino === rama
  );

  return {
    rama,
    muestra: integraciones.length,
    semanasObservadas: SEMANAS_VENTANA,
    frecuenciaPorSemana: Number(
      (integraciones.length / SEMANAS_VENTANA).toFixed(2)
    ),
    pullRequests: integraciones.map((pr) => pr.numero)
  };
}

function obtenerIndicadoresPendientes() {
  return [
    {
      indicador: 'Frecuencia de despliegue',
      estado: 'Pendiente',
      motivo:
        'El proyecto aún no dispone de un proceso de despliegue a producción registrado de forma automatizada.',
      activacionPrevista: 'Semana 16'
    },
    {
      indicador: 'Tasa de fallos de cambios',
      estado: 'Pendiente',
      motivo:
        'No existen registros de producción que permitan relacionar despliegues con fallos, degradaciones o correcciones.',
      activacionPrevista: 'Semana 16'
    },
    {
      indicador: 'Tiempo de restauración del servicio',
      estado: 'Pendiente',
      motivo:
        'El proyecto todavía no dispone de monitoreo de producción ni registros formales de incidentes y restauraciones.',
      activacionPrevista: 'Semana 16'
    }
  ];
}

function guardarResultados(datos) {
  const directorio = path.dirname(RUTA_SALIDA);

  fs.mkdirSync(directorio, {
    recursive: true
  });

  fs.writeFileSync(
    RUTA_SALIDA,
    JSON.stringify(datos, null, 2),
    'utf8'
  );
}

function mostrarResultados(datos) {
  console.log('');
  console.log('Panel de métricas de proceso - HELA');
  console.log(`Repositorio: ${datos.repositorio}`);
  console.log(`Extracción: ${datos.fechaExtraccion}`);
  console.log(
    `Ventana: ${datos.ventana.inicio} -> ${datos.ventana.fin}`
  );
  console.log(
    `Duración: ${datos.ventana.dias} días (${datos.ventana.semanas} semanas)`
  );

  console.log('');
  console.log('Tiempo de entrega de cambios');

  for (const pr of datos.pullRequests) {
    console.log(
      `#${pr.numero} | ${pr.ramaOrigen} -> ${pr.ramaDestino} | ${pr.tiempoEntregaHoras} h`
    );
  }

  console.log('');
  console.log(`N: ${datos.metricas.tiempoEntrega.muestra}`);
  console.log(
    `Promedio: ${datos.metricas.tiempoEntrega.promedioHoras} h`
  );
  console.log(
    `Mediana: ${datos.metricas.tiempoEntrega.medianaHoras} h`
  );

  console.log('');
  console.log('Frecuencia de integración');

  const principal = datos.metricas.frecuenciaIntegracionPrincipal;

  console.log(
    `${principal.rama}: ${principal.muestra} integraciones / ${principal.semanasObservadas} semanas`
  );
  console.log(
    `Frecuencia: ${principal.frecuenciaPorSemana} integraciones/semana`
  );

  const interna = datos.metricas.frecuenciaIntegracionInterna;

  console.log(
    `${interna.rama}: ${interna.muestra} integraciones / ${interna.semanasObservadas} semanas`
  );
  console.log(
    `Frecuencia complementaria: ${interna.frecuenciaPorSemana} integraciones/semana`
  );

  console.log('');
  console.log(`Datos guardados en: ${RUTA_SALIDA}`);
}

async function main() {
  try {
    console.log('Consultando GitHub API...');

    const pullRequests = await obtenerPullRequestsCerrados();
    const { inicio, fin } = obtenerVentanaTemporal();

    const pullRequestsProcesados = await procesarPullRequests(
      pullRequests,
      inicio,
      fin
    );

    const datos = {
      repositorio: `${PROPIETARIO}/${REPOSITORIO}`,
      fechaExtraccion: new Date().toISOString(),
      fuente: 'GitHub API',

      ventana: {
        inicio: inicio.toISOString(),
        fin: fin.toISOString(),
        dias: DIAS_VENTANA,
        semanas: SEMANAS_VENTANA
      },

      ramas: {
        principal: RAMA_PRINCIPAL,
        integracion: RAMA_INTEGRACION
      },

      resumenExtraccion: {
        pullRequestsCerrados: pullRequests.length,
        pullRequestsFusionadosEnVentana: pullRequestsProcesados.length
      },

      metricas: {
        tiempoEntrega: calcularTiempoEntrega(pullRequestsProcesados),

        frecuenciaIntegracionPrincipal: calcularFrecuenciaIntegracion(
          pullRequestsProcesados,
          RAMA_PRINCIPAL
        ),

        frecuenciaIntegracionInterna: calcularFrecuenciaIntegracion(
          pullRequestsProcesados,
          RAMA_INTEGRACION
        )
      },

      pullRequests: pullRequestsProcesados,

      indicadoresPendientes: obtenerIndicadoresPendientes()
    };

    guardarResultados(datos);
    mostrarResultados(datos);
  } catch (error) {
    console.error(`Error durante la extracción: ${error.message}`);
    process.exit(1);
  }
}

main();