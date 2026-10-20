
# HELA — Dashboard de Métricas de Proceso

**Equipo:** Nexo  
**Curso:** Ingeniería de Software I  
**Proyecto:** HELA — Sistema de gestión para restaurantes  
**Período académico:** Semanas 01–08

## 1. Objetivo

Medir y analizar el comportamiento del proceso de desarrollo de HELA mediante indicadores obtenidos de GitHub.

El dashboard permite evaluar los tiempos de entrega de cambios, la frecuencia de integración y la evolución de las mediciones realizadas durante el curso.

## 2. Metodología

**Fuente:** GitHub API.

**Ventana de medición:** 21 días (3 semanas).

**Criterios:**

- Se consideran PR fusionados dentro de la ventana.
- El tiempo de entrega se calcula desde el primer commit del PR hasta su integración.
- Se utilizan promedio y mediana para describir los tiempos.
- La frecuencia se calcula dividiendo las integraciones entre las semanas observadas.
- Se diferencian las ramas `main` y `develop`.
- Los indicadores sin evidencia productiva no reciben valores estimados.

Los datos y las marcas temporales originales se conservan en los archivos JSON del panel.

## 3. Comparación de métricas S04–S08

| Indicador | S04 | S08 |
|---|---:|---:|
| PR fusionados | 8 | 5 |
| Tiempo promedio de entrega | 40.8 h | 32.0 h |
| Tiempo mediano de entrega | 0.7 h | 0.5 h |
| Integraciones hacia main | 2 | 0 |
| Integraciones hacia develop | 6 | 5 |
| Frecuencia hacia main | 0.67/semana | 0.00/semana |
| Frecuencia hacia develop | 2.00/semana | 1.67/semana |

Las mediciones corresponden a dos ventanas distintas de 21 días. No representan una serie continua de todas las semanas.

## 4. Resultados S08

### 4.1. Tiempo de entrega

Se analizaron cinco PR fusionados:

| PR | Rama destino | Tiempo de entrega |
|---|---|---:|
| [#26](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/26) | develop | 0.2 h |
| [#35](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/35) | develop | 158.3 h |
| [#36](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/36) | develop | 0.1 h |
| [#38](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/38) | develop | 0.7 h |
| [#40](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/40) | develop | 0.5 h |

**Resultados:**

- Total de PR: 5.
- Promedio: 32.0 horas.
- Mediana: 0.5 horas.

El PR #35 presenta un tiempo notablemente mayor que los demás, elevando el promedio.

La mediana describe mejor el valor central de esta muestra, aunque ambos indicadores deben conservarse.

El tiempo calculado no equivale al tiempo efectivo de programación ni al tiempo exclusivo de revisión.

### 4.2. Frecuencia de integración

| Rama | Integraciones | Frecuencia semanal |
|---|---:|---:|
| main | 0 | 0.00 |
| develop | 5 | 1.67 |

La actividad de integración se concentra en `develop`, conforme al flujo de ramas adoptado por el Equipo Nexo.

La ausencia de integraciones hacia `main` no implica ausencia de trabajo desarrollado.

## 5. Indicadores DORA sin medición

| Indicador | Situación | Motivo |
|---|---|---|
| Frecuencia de despliegue | Sin medición | No existe registro verificable de despliegues a producción |
| Tasa de fallos de cambios | Sin medición | No existe historial suficiente de fallos asociados a despliegues |
| Tiempo de restauración | Sin medición | No existen registros de incidentes y recuperación productiva |

La instrumentación productiva de estos indicadores está prevista para la Semana 16.

Las integraciones de GitHub no sustituyen mediciones de despliegue.

## 6. Interpretación general

La comparación entre S04 y S08 permite observar:

- El promedio de entrega disminuyó de 40.8 a 32.0 horas.
- La mediana disminuyó de 0.7 a 0.5 horas.
- La frecuencia de integración hacia develop pasó de 2.00 a 1.67 por semana.
- Las integraciones continúan concentradas en la rama de desarrollo.

Los resultados describen las ventanas observadas, pero no demuestran por sí solos una mejora sostenida ni una relación causal.

La muestra es reducida y contiene un valor extremo que afecta considerablemente el promedio.

## 7. Evidencia y reproducibilidad

**Archivos de evidencia:**

- `metricas_s04_raw.json`: medición histórica S04.
- `metricas_raw.json`: medición consolidada S08.
- `scripts/metricas-dora.js`: programa de extracción y cálculo.

Para reproducir S08 se utiliza la fecha de referencia conservada en `metricas_raw.json`, sin modificar la ventana de 21 días.

Los registros se obtienen de GitHub API y pueden contrastarse mediante los PR originales.

## 8. Conclusión

El dashboard permite evaluar de manera reproducible una parte del flujo de desarrollo de HELA.

La información confirma cinco integraciones durante la ventana S08 y un tiempo mediano de entrega de 0.5 horas.

Las mediciones constituyen evidencia del seguimiento del proceso, con las limitaciones propias del tamaño de muestra y de la ausencia de datos productivos.

Estos resultados se incorporan al Expediente de Proceso de la Semana 08 como evidencia cuantitativa del Equipo Nexo.