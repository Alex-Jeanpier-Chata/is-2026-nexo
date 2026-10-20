# HELA — Semana 06: Reporte de velocidad y burndown parcial del Sprint 1

**Equipo:** Nexo  
**Curso:** Ingeniería de Software I — 2026-II  
**Proyecto:** HELA — Sistema web de gestión para restaurantes  
**Sprint:** Sprint 1 — Semanas académicas 06 y 07  
**Herramienta:** [GitHub Projects — Equipo Nexo](https://github.com/users/Alex-Jeanpier-Chata/projects/2)  
**Tipo de documento:** Reporte de seguimiento parcial con reconstrucción retrospectiva de evidencias.

## 1. Objetivo y alcance

El presente reporte analiza el avance parcial del Sprint 1 durante la Semana 06, utilizando los registros disponibles en GitHub Issues, GitHub Projects y los acuerdos de trabajo del Equipo Nexo.

La Semana 06 representa un punto de seguimiento intermedio y no el cierre del sprint, correspondiente a la Semana 07.

El análisis comprende tres actividades documentales de S06: medición de velocidad y burndown, catálogo de deuda técnica y retrospectiva intermedia.

Se aplica la Definition of Done (DoD) establecida en la Semana 03. Un elemento solo aporta Story Points a la velocidad cuando existen evidencias suficientes de que cumplió sus criterios de terminación.

**Limitación temporal:** la fecha exacta de inicio del Sprint 1, el día específico del corte intermedio y el historial completo de cambios del tablero no se encuentran suficientemente corroborados mediante los registros disponibles. Por ello, no se asignan fechas, estados diarios ni compromisos iniciales supuestos.

## 2. Actividades y estimación regularizada

Para el seguimiento documental de S06 se identificaron las siguientes actividades:

| Issue | Actividad | Story Points | Situación considerada en la reconstrucción |
|---|---|---:|---|
| [#22](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/22) | Reporte parcial de velocidad y burndown | 3 | En desarrollo durante S06 |
| [#23](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/23) | Catálogo priorizado de deuda técnica | 5 | Sin terminación acreditada al corte |
| [#25](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/25) | Retrospectiva intermedia y acciones de mejora | 3 | Sin terminación acreditada al corte |
| **Total** | | **11 SP** | |

El [Issue #21](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/21) cumple una función de coordinación general y no recibe Story Points adicionales, evitando contabilizar dos veces las actividades.

**Precisión metodológica:** los 11 SP corresponden a una estimación regularizada posteriormente. No existe evidencia suficiente para afirmar que constituyeron una línea base completa, aprobada y congelada al inicio del Sprint 1.

Los estados indicados describen la reconstrucción documental del trabajo y no sustituyen el historial fechado de transiciones de GitHub Projects.

## 3. Cálculo de la velocidad parcial

La velocidad se determina mediante la siguiente expresión:

**Velocidad parcial (SP) = suma de Story Points de los elementos con DoD acreditada al momento del corte.**

La evidencia documental disponible no permite acreditar que los Issues #22, #23 y #25 cumplieran íntegramente la DoD durante el corte intermedio de S06.

Por consiguiente:

| Indicador | Resultado |
|---|---:|
| Story Points estimados posteriormente para las tres actividades | 11 SP |
| Story Points con DoD acreditada mediante evidencia del corte S06 | 0 SP |
| Story Points sin acreditación de DoD para ese corte | 11 SP |
| Velocidad parcial histórica del Sprint 1 completo | No determinable |

El resultado de **0 SP acreditables** corresponde exclusivamente a las tres actividades analizadas y al nivel de evidencia disponible para el corte de S06.

Este valor **no significa ausencia de trabajo realizado, ni permite concluir que la velocidad total del Sprint 1 haya sido cero**.

### 3.1. Diferencia entre publicación y cumplimiento del DoD

Los tres entregables documentales de S06 fueron integrados posteriormente mediante el [PR #26](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/26), el 13 de octubre de 2026.

Los Issues #22, #23 y #25 se cerraron ese mismo día, después de la integración documental.

En una revisión posterior, los tres Issues muestran sus criterios de aceptación marcados. Sin embargo, esas marcas no constituyen por sí mismas evidencia contemporánea del cumplimiento de la DoD en el corte original de S06.

Adicionalmente, el historial consultado del PR #26 no registra una revisión formal aprobatoria. Por ello, se distingue entre:

- **Trabajo documentado:** existen entregables publicados en el repositorio.
- **Cierre administrativo:** los Issues fueron cerrados en GitHub.
- **DoD acreditada:** requiere comprobar los criterios aplicables y sus evidencias en el momento correspondiente.

La diferencia debe mantenerse explícita para evitar atribuir retroactivamente un nivel de cumplimiento no demostrado.

## 4. Burndown parcial y limitaciones de reconstrucción

Un burndown permite representar la evolución del trabajo restante durante un sprint. Su construcción histórica requiere una línea base identificable y registros fechados de la terminación de los elementos.

En HELA no se dispone de información suficiente para reconstruir una serie diaria completa de los Story Points comprometidos y terminados durante S06.

En consecuencia, se presenta únicamente el siguiente cuadro de control documental:

| Referencia | SP regularizados | SP con DoD acreditada al corte S06 | SP sin DoD acreditada |
|---|---:|---:|---:|
| Subconjunto de actividades documentales S06 | 11 | 0 | 11 |

Los 11 SP sin acreditación **no representan necesariamente 11 SP de esfuerzo efectivamente pendiente**, sino puntos cuya terminación formal no pudo demostrarse en el corte estudiado.

### 4.1. Interpretación del burndown

No corresponde representar descensos diarios, porcentajes de avance o una curva histórica observada sin registros suficientes.

Tampoco sería correcto convertir la estimación regularizada de 11 SP en un compromiso inicial del sprint.

Por este motivo:

- No se presenta una curva diaria como resultado real.
- No se interpolan fechas ni estados del tablero.
- No se confunden Story Points sin DoD acreditada con esfuerzo real restante.
- La evolución documental posterior se examina en el reporte de cierre de S07.

La ausencia de una serie histórica constituye una limitación de trazabilidad del seguimiento, que debe considerarse en las acciones de mejora del proceso.

## 5. Análisis y oportunidades de mejora

El seguimiento parcial permite identificar cuatro aspectos relevantes.

**5.1. Estimación y planificación**

La regularización posterior de los Story Points dificulta contrastar las estimaciones iniciales con los resultados del sprint. Es necesario registrar y conservar la línea base al comenzar cada iteración.

**5.2. Verificación de la Definition of Done**

La existencia de documentos o el cierre de Issues no garantiza por sí mismo el cumplimiento integral de la DoD. Cada cierre debe acompañarse de las evidencias aplicables y de la revisión correspondiente.

**5.3. Historial del tablero**

La falta de transiciones diarias suficientemente verificables impide construir un burndown histórico completo. Se requiere mantener actualizado GitHub Projects y conservar referencias fechadas del avance.

**5.4. Trazabilidad documental**

Los Issues, Pull Requests, entregables y acuerdos deben mantenerse vinculados para distinguir el trabajo planificado, ejecutado, publicado y formalmente aceptado.

Estas observaciones sirven como antecedentes del cierre del Sprint 1 y del plan de mejora documentados en la Semana 07.

## 6. Relación con el cierre de la Semana 07

El reporte de S07 complementa esta medición mediante la revisión de los documentos efectivamente publicados, el estado de los Issues y las limitaciones de acreditación de la DoD.

La documentación de cierre se encuentra en:

- [PR #35 — Cierre del Sprint 1](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/35).
- `docs/proceso/HELA_S07_Reporte_Cierre_Velocidad_Burndown.md`.
- `docs/proceso/HELA_S07_Plan_Mejora_Proceso.md`.

Las acciones de mejora asociadas se encuentran registradas en:

- [#32 — AM-01: Verificación de DoD y trazabilidad](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/32).
- [#33 — AM-02: Seguimiento y revisión de Pull Requests](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/33).
- [#34 — AM-03: Seguimiento de decisiones de especificación](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/34).

La medición parcial de S06 y el cierre documental de S07 deben interpretarse como análisis complementarios, sin confundir el subconjunto de 11 SP regularizados con la velocidad histórica total del Sprint 1.

## 7. Fuentes de evidencia

1. [GitHub Projects — Equipo Nexo](https://github.com/users/Alex-Jeanpier-Chata/projects/2).
2. [Issue #21 — Coordinación de S06](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/21).
3. [Issue #22 — Reporte parcial de velocidad y burndown](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/22).
4. [Issue #23 — Catálogo de deuda técnica](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/23).
5. [Issue #25 — Retrospectiva intermedia](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/25).
6. [PR #26 — Publicación de documentación S06](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/26).
7. [PR #35 — Documentación de cierre S07](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/35).
8. Paquete de acuerdos S03 y Definition of Done, disponibles en `docs/proceso`.

## 8. Conclusión

El seguimiento parcial de S06 permitió identificar tres actividades documentales que posteriormente fueron estimadas en un total de 11 Story Points.

No se encontraron evidencias suficientes para acreditar su cumplimiento integral de la Definition of Done durante el corte intermedio. En consecuencia, el subconjunto presenta **0 SP formalmente acreditables para ese corte**, sin que ello represente la velocidad global del Sprint 1.

La integración posterior de los entregables demuestra producción documental, pero no elimina las limitaciones del historial de estimación, seguimiento y verificación.

El resultado proporciona una base verificable para analizar el cierre de S07, fortalecer la trazabilidad y preparar la auditoría de procesos de la Semana 08.
