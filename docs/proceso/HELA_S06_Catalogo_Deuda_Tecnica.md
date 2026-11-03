# HELA — Semana 06: catálogo priorizado de deuda técnica

**Equipo:** Nexo  
**Herramientas:** SonarQube Cloud, repositorio GitHub y contrato OpenAPI de HELA.

## 1. Origen de la evidencia

Se analizó en SonarQube Cloud una instantánea técnica del código de HELA tomada desde `develop`, commit fuente `beb7211fc4b4c641574af109e60bea60b5dc91e0`. La instantánea está en `Juniorcoderw/is1-2026-Nexo` y conserva su procedencia explícita.

[Proyecto de análisis en SonarQube Cloud](https://sonarcloud.io/dashboard?id=Juniorcoderw_is1-2026-Nexo&branch=main).

El análisis final reportó un hallazgo abierto bajo la regla **`javascript:S5689`** (exposición de información de versión del framework), con impacto de seguridad bajo, severidad clásica `MINOR` y esfuerzo estimado de **5 min**. Otros elementos se derivan de **inspección técnica del código y del contrato OpenAPI**, no de hallazgos de SonarQube Cloud. Así se mantienen diferenciadas las fuentes.

## 2. Catálogo priorizado

| ID | Descripción | Procedencia | Tipo SWEBOK | Severidad | Esfuerzo estimado | Prioridad | Responsable propuesto |
|---|---|---|---|---|---|---|---|
| DT-01 | La entrada de `crearPedidoTemporal` comprueba que `items` exista y no esté vacío, pero no valida exhaustivamente `productoId` (UUID), `cantidad` (mín. 1), `mesaId` y longitud de `observacion` según OpenAPI. | Inspección código/OpenAPI | Código | Alta (evaluación técnica) | 3 h | P1 | Helber Junior Lope Apomayta |
| DT-02 | El servidor Express puede exponer información de tecnología/versión por configuración predeterminada. | **SonarQube Cloud, `javascript:S5689`** | Código | Baja (`LOW` / `MINOR`) | **5 min (Sonar)** | P2 | Helber Junior Lope Apomayta |
| DT-03 | La prueba automatizada disponible verifica el flujo exitoso `201`, pero no cubre explícitamente payloads inválidos y límites contractuales relevantes. | Inspección de pruebas/OpenAPI | Prueba | Media (evaluación técnica) | 4 h | P3 | Helber Junior Lope Apomayta |

Las severidades y esfuerzos que no proceden de SonarQube se identifican como **evaluaciones estimadas del equipo**. Los responsables se proponen para seguimiento y deben confirmarse en el tablero.

## 3. Acciones de remediación

### DT-01 — Validación completa de entradas

Incorporar validación consistente con los esquemas `PedidoTemporalCrear` e `ItemPedidoRequest`, incluidos UUID, límites numéricos y longitud máxima de observaciones. Verificar los rechazos mediante pruebas automatizadas y contrastar sus respuestas con OpenAPI.

### DT-02 — Configuración explícita de seguridad

Deshabilitar la exposición de encabezados tecnológicos de Express cuando corresponda y comprobar el efecto mediante una solicitud HTTP. Ejecutar un nuevo análisis para comprobar que el hallazgo Sonar queda resuelto. No se declara remediado todavía.

### DT-03 — Cobertura de casos negativos

Incorporar pruebas de validación y errores para datos inválidos, campos ausentes y límites relevantes del contrato, sin confundir cobertura propuesta con cobertura ya medida.

## 4. Criterio de seguimiento

El cierre de cada deuda requiere un Issue específico, cambio trazable, pruebas que correspondan, revisión de PR e integración a `develop`. La deuda funcional del [Issue #6](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/6) permanece separada y no se registra como hallazgo de SonarQube.

## 5. Referencias

- [Repositorio oficial HELA — `develop`](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/tree/develop)
- [Contrato OpenAPI de HELA](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/tree/develop/docs/contratos)
- [SonarQube Cloud — instantánea de análisis](https://sonarcloud.io/dashboard?id=Juniorcoderw_is1-2026-Nexo&branch=main)
