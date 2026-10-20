# HELA — Semana 08: verificación de AM-01

**Equipo:** Nexo 

**Curso:** Ingeniería de Software I, 2026-II

**Período evaluado:** 14 al 20 de octubre de 2026

**Fecha de corte:** 20 de octubre de 2026

**Repositorio:** `Alex-Jeanpier-Chata/is-2026-nexo`

**Acción de mejora:** [Issue #32 — AM-01: estandarizar la verificación del DoD y la trazabilidad](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/32)

## 1. Objetivo

Comprobar el indicador definido para AM-01 sin confundir la ausencia de casos con cumplimiento y aplicar un control homogéneo para los cierres futuros de Issues.

## 2. Regla de medición

El indicador definido en AM-01 es:

> Porcentaje de Issues cerrados durante el período de evaluación que cuentan con verificación documentada del Definition of Done (DoD) y evidencia de integración, cuando corresponda.

La fórmula utilizada es:

`Issues cerrados aplicables con verificación completa / Issues cerrados aplicables × 100`

Se considera verificación completa cuando el registro del Issue permite comprobar, de forma directa, los criterios de aceptación, los criterios aplicables del DoD y la trazabilidad al commit y al pull request (PR) de integración. Un cierre administrativo duplicado se excluye de la muestra y debe conservar la justificación de su exclusión.

## 3. Resultado del período S08

La consulta final de Issues cerrados entre el 14 y el 20 de octubre de 2026, con corte a `2026-10-20T15:09:55Z`, devolvió un caso aplicable: el [Issue #31](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/31).

| Elemento | Resultado |
|---|---:|
| Issues cerrados en el período | 1 |
| Exclusiones | 0 |
| Issues cerrados aplicables | 1 |
| Cumplimientos verificables | 1 |
| Resultado del indicador | **100 % (1/1)** |

El Issue #31 registra el cumplimiento de sus criterios, la revisión documental, la trazabilidad hacia el hallazgo protegido y la justificación de que commits y PR no aplican porque el producto de la actividad es la declaración contenida en el propio Issue. El resultado cumple el indicador, aunque su capacidad de generalización es limitada por tratarse de una muestra de un solo cierre.
### 3.1. Seguimiento posterior al primer corte

Después de la primera medición se registró el cierre del Issue #34, correspondiente a AM-03.

| Issue | Fecha de cierre (UTC) | Evidencia disponible | Verificación estandarizada |
|---|---|---|---|
| [#31](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/31) | 20/10/2026, 15:09:55 | Checklist de declaración FA-01, trazabilidad a DT-01 y justificación de PR no aplicable | Pendiente de completar identificación y fecha de verificación del DoD |
| [#34](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/34) | 20/10/2026, 15:16:32 | Checklist de seguimiento AM-03, indicador 1/1 y trazabilidad al Issue #6 | Pendiente de completar identificación y fecha de verificación del DoD |

**Muestra ampliada:** 2 Issues cerrados aplicables, sin exclusiones.

El resultado anterior de **100 % (1/1)** se conserva como registro del primer corte, realizado a las 15:09:55 UTC. No representa automáticamente el resultado de la muestra ampliada.

Aunque ambos Issues contienen criterios de cierre, todavía debe comprobarse su correspondencia completa con la verificación estandarizada del DoD, incluyendo responsable, fecha y criterios no aplicables.

Por tanto, **el indicador definitivo para la muestra de 2 Issues permanece pendiente de acreditación**. No se declara un cumplimiento de 100 % (2/2) sin completar las verificaciones individuales.

La acción AM-01 continúa abierta en el Issue #32 hasta registrar el resultado definitivo.
## 4. Diagnóstico histórico previo a la aplicación

Para establecer una línea base diagnóstica, se revisó la muestra de cierres inmediatamente anterior, correspondiente al 13 de octubre de 2026. Esta revisión no forma parte del resultado S08.

El [Issue #24](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/24) se excluyó porque fue cerrado como duplicado y remite al Issue #23; no representa una entrega independiente que requiera integración.

| Issue | Cierre | Hallazgo en el registro del Issue | Cumple AM-01 |
|---|---|---|---|
| [#21](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/21) | 2026-10-13 | Criterios de aceptación sin marcar; no consta verificación de cierre del DoD ni vínculo de integración correspondiente. | No |
| [#22](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/22) | 2026-10-13 | Criterios de aceptación marcados, pero no consta verificación de cierre del DoD ni vínculo de integración correspondiente. | No |
| [#23](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/23) | 2026-10-13 | Criterios de aceptación marcados, pero no consta verificación de cierre del DoD ni vínculo de integración correspondiente. | No |
| [#25](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/25) | 2026-10-13 | Criterios de aceptación marcados, pero no consta verificación de cierre del DoD ni vínculo de integración correspondiente. | No |

**Línea base diagnóstica:** 0 de 4 Issues aplicables, equivalente a 0 %.

La referencia conjunta a estos Issues desde el PR #26 acredita la integración de documentación del Sprint 1, pero no sustituye una verificación de cierre individual registrada en cada Issue. Este 0 % describe la calidad del registro histórico observado; no invalida por sí mismo el contenido técnico de las entregas.

## 5. Control implementado

Se corrigió la plantilla general de actividades en `.github/ISSUE_TEMPLATE/actividad.md`:

- se eliminó la sección duplicada de dependencias y bloqueos;
- se mantuvo la verificación de Definition of Ready (DoR);
- se incorporó una verificación de cierre con criterios de aceptación, DoD, verificaciones aplicables y deudas pendientes;
- se añadieron campos explícitos para commits, PR de integración, evidencia, excepciones justificadas, responsable y fecha;
- se corrigió el nombre del archivo anterior, que describía una actividad general bajo el nombre erróneo `deuda-espesificacion.md`.

El control debe completarse antes de cerrar cada nuevo Issue. Los criterios no aplicables requieren una justificación explícita; no deben marcarse como cumplidos sin evidencia.

## 6. Estado de AM-01 al corte

- **Implementación del control:** completada en la plantilla del repositorio.
- **Indicador S08:** 100 % en una muestra de 1 Issue cerrado aplicable.
- **Validación de eficacia:** primera aplicación verificada; debe repetirse en los siguientes cierres para ampliar la muestra.
- **Issue #32:** permanece abierto. Su cierre requiere verificar la aplicación real del control y autorización explícita para cambiar su estado en GitHub.

## 7. Fuentes de evidencia

- Issue #32 y su definición del indicador.
- Issues #21, #22, #23, #24 y #25 y sus historiales de cierre.
- PR #26 como referencia de integración documental, sin asumir que reemplaza el DoD individual.
- `docs/proceso/HELA_Guia_Desarrollo_y_Contribucion_v1.0.md`, sección 11, como definición vigente del DoD.
- `.github/ISSUE_TEMPLATE/actividad.md`, como control preventivo adoptado.
