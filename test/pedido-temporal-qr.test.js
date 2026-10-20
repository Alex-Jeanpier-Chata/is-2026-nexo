
const test = require('node:test');
const assert = require('node:assert/strict');

process.env.PEDIDO_TEMPORAL_VIGENCIA_MINUTOS = '1';

const app = require('../src/backend/servidor');

const PRODUCTO_VALIDO = '11111111-1111-4111-8111-111111111111';
const MESA_VALIDA = '22222222-2222-4222-8222-222222222222';

function pedidoValido() {
  return {
    items: [
      {
        productoId: PRODUCTO_VALIDO,
        cantidad: 1
      }
    ]
  };
}

async function enviarPedido(datos) {
  const servidor = app.listen(0, '127.0.0.1');

  await new Promise((resolver, rechazar) => {
    servidor.once('listening', resolver);
    servidor.once('error', rechazar);
  });

  try {
    const { port } = servidor.address();

    const respuesta = await fetch(
      `http://127.0.0.1:${port}/api/v1/publico/carta/QR-PRUEBA/pedidos-temporales`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(datos)
      }
    );

    return {
      estadoHttp: respuesta.status,
      cuerpo: await respuesta.json()
    };
  } finally {
    await new Promise((resolver, rechazar) => {
      servidor.close((error) => {
        if (error) {
          rechazar(error);
        } else {
          resolver();
        }
      });
    });
  }
}

async function verificarRechazo(datos) {
  const resultado = await enviarPedido(datos);

  assert.equal(resultado.estadoHttp, 400);
  assert.equal(resultado.cuerpo.codigo, 'PEDIDO_INVALIDO');
}

test('CU-06: crea un pedido temporal valido', async () => {
  const resultado = await enviarPedido(pedidoValido());

  assert.equal(resultado.estadoHttp, 201);
  assert.ok(resultado.cuerpo.referencia);
  assert.equal(resultado.cuerpo.estado, 'PENDIENTE');
  assert.equal(resultado.cuerpo.mesaId, null);
  assert.equal(resultado.cuerpo.items.length, 1);
  assert.equal(resultado.cuerpo.items[0].productoId, PRODUCTO_VALIDO);
  assert.equal(resultado.cuerpo.items[0].cantidad, 1);
  assert.ok(!Number.isNaN(Date.parse(resultado.cuerpo.venceEn)));
});

test('CU-06: rechaza un pedido sin productos', async () => {
  await verificarRechazo({ items: [] });
});

test('CU-06: rechaza un pedido sin campo items', async () => {
  await verificarRechazo({});
});

test('DT-01: rechaza un productoId invalido', async () => {
  const pedido = pedidoValido();
  pedido.items[0].productoId = 'PRODUCTO-INVALIDO';

  await verificarRechazo(pedido);
});

test('DT-01: rechaza cantidad igual a cero', async () => {
  const pedido = pedidoValido();
  pedido.items[0].cantidad = 0;

  await verificarRechazo(pedido);
});

test('DT-01: rechaza cantidades negativas', async () => {
  const pedido = pedidoValido();
  pedido.items[0].cantidad = -1;

  await verificarRechazo(pedido);
});

test('DT-01: rechaza cantidades decimales', async () => {
  const pedido = pedidoValido();
  pedido.items[0].cantidad = 1.5;

  await verificarRechazo(pedido);
});

test('DT-01: rechaza cantidad como texto', async () => {
  const pedido = pedidoValido();
  pedido.items[0].cantidad = '1';

  await verificarRechazo(pedido);
});

test('DT-01: rechaza mesaId invalido', async () => {
  const pedido = pedidoValido();
  pedido.mesaId = 'MESA-INVALIDA';

  await verificarRechazo(pedido);
});

test('DT-01: rechaza observacion mayor a 500 caracteres', async () => {
  const pedido = pedidoValido();
  pedido.observacion = 'A'.repeat(501);

  await verificarRechazo(pedido);
});

test('DT-01: rechaza observacion de item mayor a 500 caracteres', async () => {
  const pedido = pedidoValido();
  pedido.items[0].observacion = 'B'.repeat(501);

  await verificarRechazo(pedido);
});

test('DT-01: rechaza opciones con formato incorrecto', async () => {
  const pedido = pedidoValido();
  pedido.items[0].opciones = 'SIN FORMATO VALIDO';

  await verificarRechazo(pedido);
});

test('CU-06: acepta valores opcionales validos', async () => {
  const pedido = pedidoValido();

  pedido.mesaId = MESA_VALIDA;
  pedido.observacion = 'A'.repeat(500);
  pedido.items[0].observacion = 'Sin cebolla';
  pedido.items[0].opciones = [
    {
      nombre: 'Punto de coccion',
      valor: 'Bien cocido'
    }
  ];

  const resultado = await enviarPedido(pedido);

  assert.equal(resultado.estadoHttp, 201);
  assert.equal(resultado.cuerpo.mesaId, MESA_VALIDA);
  assert.equal(resultado.cuerpo.items[0].opciones.length, 1);
});
