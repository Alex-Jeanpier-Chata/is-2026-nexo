# HELA — Semana 08: verificación de AM-03

**Equipo:** Nexo

**Curso:** Ingeniería de Software I, 2026-II

**Fecha de corte:** 20 de octubre de 2026

**Repositorio:** `Alex-Jeanpier-Chata/is-2026-nexo`

**Acción de mejora:** [Issue #34 — AM-03: seguimiento de decisiones de especificación](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/34)

## 1. Objetivo

Verificar que cada decisión de especificación pendiente identificada se mantenga en un Issue independiente, trazable al requisito afectado, con estado, supuesto vigente y responsable asignado.

## 2. Regla de medición

El indicador definido en el plan S07 es:

`Decisiones pendientes con Issue trazable y responsable / decisiones pendientes identificadas × 100`

Para considerarse cumplimiento, el Issue debe permanecer abierto mientras la decisión no esté resuelta y registrar:

- la decisión pendiente;
- el requisito o artefacto afectado;
- el estado actual;
- la resolución o el supuesto vigente;
- un responsable asignado en GitHub;
- evidencia verificable.

La búsqueda se realizó sobre los Issues abiertos del repositorio con la etiqueta `deuda-especificacion` y se contrastó con el plan S07 y las referencias del código y contrato.

## 3. Muestra evaluada

Se identificó una decisión de especificación pendiente.

| Decisión | Issue | Requisito relacionado | Estado | Resolución o supuesto vigente | Responsable | Evidencia |
|---|---|---|---|---|---|---|
| Duración funcional de la vigencia del pedido temporal QR y nivel de configuración | [#6](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/6) | CU-06; `POST /api/v1/publico/carta/{codigoQr}/pedidos-temporales`; `PedidoTemporal.venceEn` | Abierta; pendiente de decisión funcional | Configuración mediante `PEDIDO_TEMPORAL_VIGENCIA_MINUTOS`; 1 minuto se usa solo como dato técnico de prueba | `Alex-Jeanpier-Chata` | Issue #6; OpenAPI; `servidor.js`; `servicio.js`; prueba de pedido temporal |

No se encontró evidencia de una duración funcional aprobada ni de que la configuración corresponda a plataforma, restaurante o sucursal. Por ello, el Issue #6 permanece abierto y conserva un criterio de cierre explícito.

## 4. Resultado del indicador

| Elemento | Resultado |
|---|---:|
| Decisiones pendientes identificadas | 1 |
| Decisiones con Issue trazable y responsable | 1 |
| Numerador | 1 |
| Denominador | 1 |
| Resultado | **100 % (1/1)** |

El 100 % acredita el seguimiento trazable de la decisión pendiente. No significa que la decisión funcional haya sido resuelta.

## 5. Correcciones aplicadas

- Se asignó el Issue #6 a `Alex-Jeanpier-Chata`, destinatario identificado para la decisión.
- Se estructuró el Issue #6 con decisión, requisito relacionado, estado, supuesto, evidencia y criterio de cierre.
- Se mantuvo el Issue #6 abierto para no presentar el supuesto técnico como resolución funcional.
- Se corrigió en el Issue #34 la inconsistencia entre el responsable inicialmente propuesto y el responsable efectivo del plan S07. Prevalece Oscar Fabian Choque Palza (`OscarChoquePalza`), coherente con el plan S07 y con el campo `Assignees`.
- Se registró la muestra `1/1`, el cálculo y la verificación de cierre de AM-03.

## 6. Evidencia técnica

- `docs/contratos/hela-openapi-v0.2.1.yaml`, líneas del endpoint y del esquema `PedidoTemporal.venceEn`.
- `src/backend/servidor.js`, lectura de `PEDIDO_TEMPORAL_VIGENCIA_MINUTOS`.
- `src/backend/modulos/carta-qr/servicio.js`, validación y cálculo configurable de la vigencia.
- `test/pedido-temporal-qr.test.js`, valor de 1 minuto usado en pruebas.
- `docs/proceso/HELA_S07_Plan_Mejora_Proceso.md`, definición de AM-03, responsable efectivo e indicador.
- Issues [#6](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/6) y [#34](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/34).

## 7. Estado al corte

- **AM-03:** aplicada y verificada; Issue #34 cerrado como completado.
- **Indicador:** 100 % (1/1).
- **Decisión funcional QR:** pendiente; Issue #6 abierto y asignado.
- **Trabajo posterior:** cuando exista una decisión aprobada, actualizar especificación, contrato y código afectados, verificar el cambio y enlazar su integración antes de cerrar el Issue #6.
