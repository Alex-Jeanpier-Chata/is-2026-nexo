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

La consulta de Issues cerrados entre el 14 y el 20 de octubre de 2026 no devolvió casos.

| Elemento | Resultado |
|---|---:|
| Issues cerrados en el período | 0 |
| Exclusiones | 0 |
| Issues cerrados aplicables | 0 |
| Cumplimientos verificables | 0 |
| Resultado del indicador | **Sin muestra** |

No se calcula `0 / 0` ni se informa 100 %. La ausencia de cierres impide observar la eficacia del control durante S08; por tanto, este resultado no demuestra cumplimiento ni incumplimiento del indicador.

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
- **Indicador S08:** sin muestra; no evaluable por ausencia de Issues cerrados en el período.
- **Validación de eficacia:** pendiente de la primera muestra de cierres posterior a la adopción.
- **Issue #32:** permanece abierto. Su cierre requiere verificar la aplicación real del control y autorización explícita para cambiar su estado en GitHub.

## 7. Fuentes de evidencia

- Issue #32 y su definición del indicador.
- Issues #21, #22, #23, #24 y #25 y sus historiales de cierre.
- PR #26 como referencia de integración documental, sin asumir que reemplaza el DoD individual.
- `docs/proceso/HELA_Guia_Desarrollo_y_Contribucion_v1.0.md`, sección 11, como definición vigente del DoD.
- `.github/ISSUE_TEMPLATE/actividad.md`, como control preventivo adoptado.
