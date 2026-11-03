# HELA — Semana 07: reporte de cierre del Sprint 1

**Equipo:** Nexo  
**Curso:** Ingeniería de Software I, 2026-II  
**Sprint:** Sprint 1, semanas académicas 06 y 07  
**Corte de consulta:** 13 de octubre de 2026  
**Fuente primaria:** [GitHub Project `is-2026-nexo`](https://github.com/users/Alex-Jeanpier-Chata/projects/2), Issues y Pull Requests del [repositorio HELA](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo).  
**Estado:** cierre documental con limitaciones de reconstrucción histórica; no equivale a certificación de DoD.

## 1. Propósito y criterio de conteo

Registrar el estado verificable del Sprint 1 al cierre de la práctica de S07. Conforme a la Definition of Done (DoD) del Equipo Nexo, un elemento aporta puntos a la velocidad **únicamente si se acredita su terminación**; cerrar un Issue administrativamente no reemplaza la verificación del DoD. No se asignan puntos retroactivamente a trabajo que no los tenía en la línea base original.

**Fórmula:** `Velocidad acreditada = Σ SP de elementos del Sprint 1 con DoD verificable al corte`.

La reconstrucción se concentra en los tres paquetes de S06 registrados con estimaciones posteriores. No se dispone de una línea base completa, fechada y congelada de todos los elementos comprometidos al inicio del Sprint 1; por ello no corresponde presentar este subconjunto como velocidad histórica total del sprint.

## 2. Estado verificado de los elementos de S06

| Elemento | SP regularizados | Evidencia publicada | DoD acreditado al corte | SP acreditables |
|---|---:|---|---|---:|
| [#22 — Velocidad y burndown parcial](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/22) | 3 | Documento S06, PR #26 | **No acreditado**: revisión formal del PR no registrada y checklist del Issue sin marcar | 0 |
| [#23 — Catálogo de deuda técnica](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/23) | 5 | Documento S06, PR #26 | **No acreditado**: revisión formal del PR no registrada y checklist del Issue sin marcar | 0 |
| [#25 — Retrospectiva intermedia](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/25) | 3 | Documento S06, PR #26 | **No acreditado**: además, las intervenciones individuales del acta están pendientes de ratificación | 0 |
| **Subtotal documentado** | **11** | | | **0** |

El [Issue #21](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/21) es de coordinación y **no tiene SP**, para evitar doble conteo. El [PR #26](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/26) fue integrado en `develop` el **13/10/2026, 21:54 UTC**, con los tres documentos S06. Los Issues #21, #22, #23 y #25 se cerraron posteriormente, el **13/10/2026, aproximadamente 22:10 UTC**. El historial consultado del PR #26 **no registra revisión formal aprobatoria**. Esto describe el estado de evidencia, sin atribuir responsabilidades personales.

Los **11 SP** se estimaron/regularizaron después del corte original; **no son el compromiso histórico inicial** del Sprint 1. Los hallazgos de deuda creados en S07 (#28–#30), la función de aptitud (#31) y las mejoras futuras (#32–#34) permanecen pendientes y no deben contarse como trabajo terminado del Sprint 1.

## 3. Velocidad de cierre: resultado verificable y alcance

| Medición | Resultado |
|---|---|
| SP regularizados del subconjunto S06 | **11 SP** |
| SP de ese subconjunto con DoD demostrable al corte | **0 SP** |
| Velocidad global histórica del Sprint 1 | **No determinable con las evidencias disponibles** |

La cifra **0 SP** caracteriza únicamente el subconjunto documental S06 bajo la regla de acreditación anterior. **No significa que el equipo no haya trabajado ni que la velocidad de todo el Sprint 1 sea cero.** Existen entregables integrados, cuya acreditación no puede inferirse sin su estimación y pertenencia comprobadas a la línea base original.

## 4. Burndown final: reconstrucción limitada y explícita

La guía solicita un burndown final. Al no contar con un registro completo de estimaciones iniciales y transiciones diarias del tablero, **no existe una serie histórica diaria que pueda representarse como medición real**. Se informa una reconstrucción del **subconjunto S06 regularizado**, con dos cortes documentales y sin interpolar fechas intermedias:

| Corte documental | Alcance | SP de referencia | SP con DoD acreditado | SP sin DoD acreditado |
|---|---|---:|---:|---:|
| Corte intermedio S06 | Subconjunto S06, con estimaciones regularizadas a posteriori | 11 | 0 | 11 |
| Corte de verificación S07 (13/10) | Mismo subconjunto | 11 | 0 | 11 |

![Evolución de los SP sin DoD acreditado en el subconjunto S06; esquema documental de dos cortes, no burndown diario observado](HELA_S07_Burndown_Reconstruccion_Documental.png)

**Interpretación:** el gráfico indica **ausencia de acreditación formal de DoD en el subconjunto observado**, no ausencia de producción ni una curva diaria del sprint. La curva ideal y los puntos diarios reales **se omiten** por falta de una línea base y cronología verificables.

## 5. Fricción de herramientas y trazabilidad del cierre

Los registros disponibles no permiten medir con exactitud los **días de espera en cada columna** (`To Do`, `In Progress`, `In Review`). Esa limitación constituye una **fricción de trazabilidad de herramientas**, a considerar en el plan de mejora; no es lícito trasladar el tiempo total de vida de una PR a días de permanencia en una columna. Por ejemplo, el [PR #20](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/20) transcurrió entre el **15/09 y el 22/09**, antecedente útil para estudiar transferencias de revisión, pero no demuestra por sí mismo tiempo bloqueado dentro del Sprint 1.

Las asignaciones y correspondencias de procesos (`Proceso (hipótesis)`) se gestionan en el [tablero](https://github.com/users/Alex-Jeanpier-Chata/projects/2) y su vista [Deuda y mejora](https://github.com/users/Alex-Jeanpier-Chata/projects/2/views/2). Este mapeo se usa como **hipótesis de atribución** según guías *Deployment Package* del perfil básico ISO/IEC 29110; la conformidad con la norma no se declara y se reserva a la auditoría S08.

## 6. Evidencias y límites de verificación

- [Guía de laboratorio S07 — Cierre del Sprint 1](https://docs.google.com/document/d/1bngtZ9xkGhrmp_dccNXgK1Cq8HAZN3FJ/edit).
- [Reporte parcial S06](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/blob/develop/docs/proceso/HELA_S06_Reporte_Velocidad_Burndown_Sprint1.md).
- [PR #26 — Documentación S06 integrada a develop](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/26).
- [GitHub Project Equipo Nexo](https://github.com/users/Alex-Jeanpier-Chata/projects/2).

**Pendiente para una medición histórica completa:** línea base original de todo Sprint 1, asignación histórica de SP por elemento y registro fechado de cada cambio de columna. No se sustituyen estos datos por valores supuestos.
