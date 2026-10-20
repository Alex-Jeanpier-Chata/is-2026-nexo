# Panel de métricas de proceso

Este panel presenta las métricas obtenidas del historial real del repositorio de HELA mediante la API de GitHub. Conserva la medición histórica de S04 y añade la captura de cierre de S08 sin cambiar la metodología.

## 1. Metodología

- Ventana de observación: 21 días, equivalentes a 3 semanas.
- Inclusión: Pull Requests con `merged_at` dentro de la ventana.
- Tiempo de entrega: `merged_at - fecha del primer commit del PR`.
- Resumen del tiempo de entrega: promedio y mediana, sin excluir valores extremos.
- Frecuencia principal: PR fusionados hacia `main` divididos entre 3 semanas.
- Información complementaria: PR fusionados hacia `develop` divididos entre 3 semanas.

La integración hacia `main` no se equipara a un despliegue. Frecuencia de despliegue, tasa de fallos de cambios y tiempo de restauración permanecen pendientes mientras no exista evidencia de producción.

## 2. Comparación S04–S08

| Indicador | S04 | S08 |
|---|---:|---:|
| PR fusionados en la ventana | 8 | 3 |
| Tiempo de entrega promedio | 40.8 h | 52.9 h |
| Tiempo de entrega mediano | 0.7 h | 0.2 h |
| Integraciones hacia `main` | 2 | 0 |
| Frecuencia hacia `main` | 0.67/semana | 0.00/semana |
| Integraciones hacia `develop` | 6 | 3 |
| Frecuencia hacia `develop` | 2.00/semana | 1.00/semana |

La muestra S08 es pequeña. El promedio aumenta por el PR #35, mientras la mediana permanece próxima a los PR de integración rápida. Los resultados describen el flujo observado; no constituyen por sí solos una evaluación del desempeño del equipo.

## 3. Captura histórica S04

La evidencia original se conserva en [`metricas_s04_raw.json`](metricas_s04_raw.json).

| Elemento | Valor |
|---|---|
| Fecha de extracción | `2026-09-15T23:38:38.097Z` |
| Inicio de ventana | `2026-08-25T23:38:35.403Z` |
| Fin de ventana | `2026-09-15T23:38:35.403Z` |
| Muestra | 8 PR fusionados |
| PR hacia `main` | #12, #1 |
| PR hacia `develop` | #17, #14, #10, #8, #5, #3 |

Resultados conservados: promedio de 40.8 horas, mediana de 0.7 horas, 0.67 integraciones por semana hacia `main` y 2.00 integraciones por semana hacia `develop`.

## 4. Captura de cierre S08

La salida completa se conserva en [`metricas_raw.json`](metricas_raw.json).

| Elemento | Valor |
|---|---|
| Repositorio | `Alex-Jeanpier-Chata/is-2026-nexo` |
| Fuente | GitHub API |
| Fecha de extracción | `2026-10-20T14:58:51.514Z` |
| Inicio de ventana | `2026-09-29T14:58:22.858Z` |
| Fin de ventana | `2026-10-20T14:58:22.858Z` |
| Duración | 21 días / 3 semanas |
| PR cerrados consultados | 17 |
| PR fusionados en la ventana | 3 |

### 4.1. Tiempo de entrega

| PR | Rama de origen | Destino | Primer commit | Integración | Tiempo |
|---:|---|---|---|---|---:|
| [#36](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/36) | `docs/s06---S07-Publicacion-de-entregables` | `develop` | 20/10/2026 13:54:50 UTC | 20/10/2026 14:00:52 UTC | 0.1 h |
| [#35](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/35) | `docs/s07-cierre-sprint1` | `develop` | 13/10/2026 23:43:56 UTC | 20/10/2026 14:01:25 UTC | 158.3 h |
| [#26](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/26) | `docs/s06-medicion-sprint1` | `develop` | 13/10/2026 21:44:04 UTC | 13/10/2026 21:54:29 UTC | 0.2 h |

**Resultado S08:** promedio de **52.9 horas** y mediana de **0.2 horas**, con **N = 3 PR**.

### 4.2. Frecuencia de integración

- `main`: 0 integraciones en 3 semanas; **0.00 integraciones/semana**, N = 0.
- `develop`: 3 integraciones en 3 semanas; **1.00 integración/semana**, N = 3 (#36, #35 y #26).

El valor cero hacia `main` significa que no hubo PR fusionados a esa rama dentro de la ventana. No representa frecuencia de despliegue ni ausencia de trabajo integrado en `develop`.

## 5. Indicadores pendientes

| Indicador | Estado | Información faltante | Activación prevista |
|---|---|---|---|
| Frecuencia de despliegue | Pendiente | Registro automatizado de despliegues reales a producción | Semana 16 |
| Tasa de fallos de cambios | Pendiente | Relación entre despliegues y fallos o correcciones posteriores | Semana 16 |
| Tiempo de restauración | Pendiente | Monitoreo, incidentes y marcas temporales de recuperación | Semana 16 |

No se asignan ceros, estimaciones ni equivalencias con merges a estos tres indicadores.

## 6. Reproducción

El corte S08 se reproduce en PowerShell con:

```powershell
$env:METRICAS_FECHA_FIN = '2026-10-20T14:58:22.858Z'
node scripts/metricas-dora.js
```

`METRICAS_FECHA_FIN` fija el final de la ventana. Si se omite, el script utiliza la hora de ejecución. `GITHUB_TOKEN` es opcional para el repositorio público y puede definirse para usar una consulta autenticada.

## Referencias

- Forsgren, N., et al. (2023). *Metrics for Agile Teams (The DORA Metrics)*. DORA State of DevOps Report.
- IEEE Computer Society. (2024). *Guide to the Software Engineering Body of Knowledge (SWEBOK Guide) v4.0*, §7.
- Universidad Nacional Jorge Basadre Grohmann. (2026). *Sílabo de Ingeniería de Software I, 2026-II*.
