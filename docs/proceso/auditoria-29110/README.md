# HELA — Revisión interna de evidencias ISO/IEC 29110

**Curso:** Ingeniería de Software I, 2026-II

**Equipo:** Nexo

**Proyecto:** HELA — Sistema web de gestión para restaurantes

**Perfil de referencia:** perfil básico de software

**Corte de evidencia:** 20 de octubre de 2026

**Commit inspeccionado:** `6d46675`

**Tipo de registro:** matriz preparatoria para la auditoría cruzada de la Semana 08

## 1. Alcance y límite de esta revisión

Esta revisión contrasta las evidencias disponibles de HELA con los siete resultados de Gestión de Proyectos (`PM.O1`–`PM.O7`), los siete resultados de Implementación de Software (`SI.O1`–`SI.O7`) y las cinco condiciones de entrada indicadas por la guía de la Semana 08.

Las clasificaciones de la matriz son una **preclasificación interna de evidencia**. No se localizó un registro auténtico de auditoría cruzada que identifique al equipo auditor, la fecha de ejecución y sus conclusiones. Por ello, este documento no declara conformidad, certificación, madurez, capacidad ni porcentaje de cumplimiento del perfil. La auditoría cruzada queda pendiente de validación por un equipo distinto de Nexo.

Estados usados para preparar la revisión externa:

- **Evidenciado:** la evidencia localizada cubre el resultado en el alcance examinado.
- **Evidenciado en parte:** existe evidencia pertinente, pero falta uno o más elementos del resultado.
- **Sin evidencia:** no se localizó evidencia suficiente y trazable para el resultado.

## 2. Fuentes de referencia

- [Guía principal S08](https://docs.google.com/document/d/1WSHh4siEh4zQwRo44U_LTFXe40I9exK0mC8cDNvQg44/edit).
- [Guía de referencia rápida S08](https://docs.google.com/document/d/1mMz_bYBo14EeDr-QMBtNK9OGAvUwBjV-CyufjYCGR9E/edit).
- [Práctica de auditoría cruzada S08](https://docs.google.com/document/d/1w0dXDDbD5qCg8sCzl8plqGdMQTUnvABHXbH18zxMHf4/edit).
- ISO/IEC 29110-5-1-2:2025, cláusulas 5.2, 6.2 y 7.2, material de consulta suministrado en el curso.
- ISO/IEC TR 29110-3-1:2020, guía de evaluación de procesos suministrada en el curso.

## 3. Identificación de la revisión

| Campo | Registro |
|---|---|
| Unidad revisada | Proyecto HELA del Equipo Nexo |
| Alcance temporal | Evidencia producida o publicada entre S01 y el corte de S08 |
| Repositorio oficial | [Alex-Jeanpier-Chata/is-2026-nexo](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo) |
| Responsable de la consolidación | Equipo Nexo |
| Equipo auditor cruzado | **No localizado en las evidencias disponibles** |
| Fecha de auditoría cruzada | **No localizada** |
| Fecha de revisión interna | 2026-10-20 |
| Regla de independencia | Esta matriz no sustituye la valoración del equipo auditor externo |

## 4. Condiciones de entrada

| N.° | Condición de entrada | Evidencia exacta y fecha | Qué demuestra | Qué no demuestra | Preclasificación interna |
|---:|---|---|---|---|---|
| 1 | Acuerdo documentado, aprobado por la dirección de la VSE y establecido como línea base antes de iniciar | `HELA_Acta_Constitucion_y_Acuerdos_Equipo_Nexo_v1.2.docx`, acta del 2026-08-28, publicada en `6ce09d2` el 2026-09-04; etiquetas `linea-base-heredada` y `v0.1.0-baseline`, creadas el 2026-08-29 | Constitución, responsables internos y adopción del paquete heredado | No acredita un acuerdo con cliente ni su aprobación; la publicación del acta es posterior al inicio del repositorio | **Evidenciado en parte** |
| 2 | Estudio de factibilidad efectuado antes de iniciar | No se localizó un estudio de factibilidad o viabilidad en el repositorio ni en los entregables S01–S08 consultados | — | Viabilidad técnica, económica, operativa y temporal previa al inicio | **Sin evidencia** |
| 3 | Equipo del proyecto, incluida su dirección, asignado y formado | Acta del 2026-08-28: cuatro integrantes y roles de coordinación, repositorio, OpenAPI y consolidación | Equipo y dirección interna asignados | No se localizaron registros de formación o competencia para los roles | **Evidenciado en parte** |
| 4 | Ciclo de vida documentado | [Informe de proceso S02](https://docs.google.com/document/d/17BX6mDSPR1eQRXsjAu8TzNPrF7uncUrz85b_Gj4B-Lg/edit), publicado el 2026-09-04: ciclo iterativo-incremental, objetivo de Sprint y DoD | Estrategia de ciclo de vida declarada y justificada | No demuestra por sí solo su aplicación completa en todos los incrementos | **Evidenciado** |
| 5 | Bienes, servicios e infraestructura necesarios disponibles | Repositorio, contrato OpenAPI, entorno Node.js y prueba de integración; primera rebanada publicada mediante [PR #8](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/8) el 2026-09-04 | Infraestructura mínima disponible para construir y probar CU-06 | No existe inventario inicial aprobado de toda la infraestructura requerida ni evidencia de ambiente productivo | **Evidenciado en parte** |

## 5. Correspondencia de artefactos con productos de trabajo

Las correspondencias siguientes son **hipótesis del equipo** para orientar la auditoría; no constituyen una asignación normativa definitiva.

| Artefacto HELA | Producto de trabajo candidato | Límite de la hipótesis |
|---|---|---|
| Acta de constitución y acuerdos | `WP.02 Agreement` | Es un acuerdo interno; no sustituye un acuerdo con cliente |
| Issue #6 | `WP.03 Change Request` | Registra una decisión pendiente, no una solicitud de cambio recibida y aprobada |
| Reportes S06/S07 y panel DORA | `WP.09 Progress Status Record` | Registran cortes parciales; no contienen aceptación de cierre por el cliente |
| Informe de proceso S02 | `WP.10 Project Plan` | Contiene objetivo, ciclo y DoD para una rebanada; no es un plan integral estimado y aprobado |
| Repositorio Git y etiquetas | `WP.11 Project Repository` | Acredita almacenamiento y control técnico, no entrega formal al cliente |
| Especificación del Sistema | `WP.13 Requirements Specification` | No se localizó aprobación del cliente |
| Código de CU-06 | `WP.15 Software Components` | Cubre una rebanada, no el producto completo |
| SAD v2.0 | `WP.16 Software Design` | Predomina el diseño arquitectónico; el diseño detallado permanece incompleto |
| Prueba `pedido-temporal-qr.test.js` | `WP.19 Test Cases and Test Procedures` | Existe un caso feliz de integración; no es un conjunto de pruebas del producto |
| Matriz RF–CU–DP de la especificación | `WP.21 Traceability Record` | La cadena hacia código y pruebas está documentada solo de forma parcial |

## 6. Matriz de los catorce resultados

### 6.1 Gestión de Proyectos

| Resultado | Síntesis del resultado esperado | Evidencia exacta y fecha | Qué demuestra | Qué falta o no demuestra | Preclasificación interna |
|---|---|---|---|---|---|
| `PM.O1` | Desarrollar un plan conforme al acuerdo, revisado y aceptado por el cliente, con tareas, recursos y estimaciones | Informe S02 del 2026-09-04; acta del 2026-08-28; plan S07 en `0a84599` del 2026-10-13 | Ciclo, objetivo de Sprint, responsabilidades y acciones de mejora | Plan integral, estimación completa y revisión/aceptación del cliente | **Evidenciado en parte** |
| `PM.O2` | Supervisar el avance contra el plan; registrar estado, corregir desvíos y obtener aprobación/aceptación cuando corresponda | Panel DORA S04/S08; reportes de velocidad S06 y S07; verificaciones AM-01 y AM-03 del 2026-10-20 | Cortes cuantitativos, limitaciones y acciones correctivas trazables | Línea base histórica completa, aprobación de cambios por cliente y registro de aceptación de cierre | **Evidenciado en parte** |
| `PM.O3` | Recibir y analizar solicitudes de cambio, evaluar impactos y obtener aprobación del cliente | [Issue #6](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/6), creado el 2026-09-04 y actualizado el 2026-10-20 | Una decisión funcional pendiente, su alcance y responsable | No es una solicitud de cambio recibida; no hay análisis de costo/plazo ni aprobación del cliente | **Sin evidencia** |
| `PM.O4` | Realizar reuniones de revisión con equipo y cliente, registrar acuerdos y darles seguimiento | Acta S06 en `37b5af0` y plan S07 en `0a84599`, ambos del 2026-10-13 | Propuestas de retrospectiva y necesidad de seguimiento | El acta S06 exige ratificación; no se localizó registro de reunión realizada ni participación del cliente | **Sin evidencia** |
| `PM.O5` | Identificar riesgos durante el proyecto | Especificación, sección 15.2, publicada en `f1b2fa2` el 2026-09-01; catálogo de deuda técnica en `37b5af0` del 2026-10-13 | Riesgos del producto con tratamiento y hallazgos técnicos priorizados | Registro vivo de riesgos del proyecto, responsable, exposición, fecha de revisión y seguimiento | **Evidenciado en parte** |
| `PM.O6` | Definir y aplicar la estrategia de control de versiones, líneas base, cambios, liberaciones, almacenamiento y entrega | Guía de contribución en `6ce09d2` del 2026-09-04; etiquetas del 2026-08-29 y 2026-09-03; PR y repositorio | Ramas, PR, commits, repositorio y dos líneas base técnicas identificables | Control formal de liberaciones y entrega/disponibilidad confirmada para el cliente | **Evidenciado en parte** |
| `PM.O7` | Asegurar que productos y procesos se verifiquen o validen contra plan y requisitos | DoD S03 en `93486e4` del 2026-09-08; PR #8; prueba ejecutada el 2026-10-20: 1 aprobada, 0 fallidas | Criterios de terminación y verificación automatizada de CU-06 | Cobertura de los demás productos, registros consistentes de revisión y validación con cliente | **Evidenciado en parte** |

### 6.2 Implementación de Software

| Resultado | Síntesis del resultado esperado | Evidencia exacta y fecha | Qué demuestra | Qué falta o no demuestra | Preclasificación interna |
|---|---|---|---|---|---|
| `SI.O1` | Ejecutar las tareas conforme al plan vigente | Informe S02; [Issue #7](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/7); [PR #8](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/8); etiqueta `v0.2.0-vertical-slice` del 2026-09-03 | La rebanada CU-06 recorrió tarea, código, prueba, integración y versión | Correspondencia de todas las tareas S01–S08 con un plan vigente | **Evidenciado en parte** |
| `SI.O2` | Definir requisitos correctos, comprobables, aprobados, establecidos como línea base, comunicados y trazables | Especificación v1.0 y OpenAPI v0.2.1, publicados el 2026-09-01; Issue #6 abierto | Requisitos identificados, criterios de aceptación, RF–CU–DP y contrato versionado | Aprobación del cliente, línea base formal de requisitos y resolución de la vigencia QR | **Evidenciado en parte** |
| `SI.O3` | Desarrollar arquitectura y diseño detallado, establecer la arquitectura como línea base y mantener trazabilidad con requisitos | SAD v2.0, línea base del 2026-09-01; OpenAPI; módulo `carta-qr` del 2026-09-03 | Arquitectura, componentes, interfaces y realización de CU-06 coherentes | Diseño detallado completo, especialmente persistencia física, y trazabilidad integral requisito–diseño | **Evidenciado en parte** |
| `SI.O4` | Producir componentes, definir y ejecutar pruebas unitarias y mantener consistencia/trazabilidad | Código de `src/backend/modulos/carta-qr`, prueba de integración y PR #8 del 2026-09-04 | Componente ejecutable y prueba automatizada trazable a CU-06 | Pruebas unitarias, cobertura de errores y trazabilidad completa hacia todos los requisitos y diseños | **Evidenciado en parte** |
| `SI.O5` | Integrar y verificar el software con casos/procedimientos, informe de pruebas y corrección de defectos | Prueba HTTP de CU-06; ejecución del 2026-10-20: 1 prueba aprobada y 0 fallidas | Integración ruta–controlador–servicio–repositorio para el caso exitoso | Plan e informe de pruebas, integración del producto, cobertura negativa y registro de defectos/correcciones | **Evidenciado en parte** |
| `SI.O6` | Integrar, establecer como línea base y almacenar un producto que satisfaga requisitos acordados, con documentación de uso, operación y mantenimiento | Código y etiqueta `v0.2.0-vertical-slice`; repositorio del proyecto | Una rebanada técnica se encuentra almacenada y versionada | Producto completo, requisitos acordados por cliente, documentación de usuario/operación/mantenimiento y aceptación | **Sin evidencia** |
| `SI.O7` | Verificar y validar todos los productos requeridos con criterios definidos, corregir defectos y conservar registros | DoD S03; plantilla de PR; prueba CU-06; verificaciones AM-01/AM-03 | Existen criterios y registros para una parte del trabajo | V&V de todos los productos, validación del cliente, registro completo de defectos y correcciones | **Evidenciado en parte** |

## 7. Resultados que requieren participación del cliente

La guía S08 identifica siete resultados cuya demostración necesita evidencia del cliente: `PM.O1`, `PM.O2`, `PM.O3`, `PM.O4`, `PM.O6`, `SI.O2` y `SI.O6`.

En el corte revisado no se localizaron aprobaciones, aceptaciones, actas o solicitudes de cambio atribuibles a un cliente real. Los actores “Cliente final” y “restaurante cliente” descritos en la Especificación son roles del sistema y no prueban participación de un cliente del proyecto. Esta ausencia explica los límites registrados en esos siete resultados.

## 8. Síntesis de la preclasificación

| Proceso | Evidenciado | Evidenciado en parte | Sin evidencia |
|---|---:|---:|---:|
| Gestión de Proyectos | 0 | 5 | 2 |
| Implementación de Software | 0 | 6 | 1 |
| **Total de resultados** | **0** | **11** | **3** |

Las cantidades son un inventario de estados de evidencia, no un porcentaje de conformidad, nivel de capacidad o madurez.

## 9. Desviaciones y acciones necesarias

| Prioridad | Desviación verificable | Acción necesaria | Evidencia esperada para cerrar |
|---:|---|---|---|
| 1 | No se localizó el registro de auditoría cruzada | Ejecutar la revisión con otro equipo y registrar integrantes, fecha y decisión por cada resultado | Informe validado por el equipo auditor en esta misma ruta |
| 2 | No existe evidencia auténtica de participación del cliente | Obtener o preservar aprobaciones, aceptaciones, solicitudes de cambio y actas reales; si el curso no dispone de cliente, declarar formalmente la limitación | Registro fechado y atribuible, sin simular intervención |
| 3 | No se localizó estudio de factibilidad previo | Incorporar el artefacto histórico si existe; si no existe, registrar la ausencia sin retrofechar un estudio nuevo | Enlace al estudio auténtico o constancia explícita de ausencia |
| 4 | El plan y seguimiento no conservan una línea base histórica completa | Consolidar plan, estimaciones, responsables, hitos y registro de cambios desde S09 | Plan versionado y estados comparables contra su línea base |
| 5 | La verificación técnica cubre principalmente CU-06 y su caso exitoso | Ampliar pruebas negativas, unitarias e integración; producir un informe de pruebas reproducible | Casos, procedimientos, ejecución, resultados y defectos/correcciones |
| 6 | No existe todavía producto completo con documentación operativa | Completar los incrementos previstos y preparar guías de usuario, operación y mantenimiento | Liberación identificada, documentación y registro auténtico de aceptación |

## 10. Criterio para cerrar la auditoría S08

Este registro podrá pasar de preparatorio a informe de auditoría cruzada cuando se incorporen, sin reconstrucciones ficticias:

1. nombre del equipo auditor y de sus integrantes;
2. fecha de la revisión;
3. estado asignado por el auditor a cada uno de los catorce resultados;
4. observaciones o desviaciones comunicadas por el auditor;
5. acciones acordadas y sus responsables;
6. referencia al commit revisado.

Hasta entonces, el estado documental de la auditoría cruzada es **pendiente**, aunque la matriz interna de preparación se encuentra completa.

## 11. Verificación reproducible del corte

- `git status --short --branch`: rama `docs/s08-expediente-proceso`, sin cambios al iniciar la revisión.
- `git tag --list`: `linea-base-heredada`, `v0.1.0-baseline` y `v0.2.0-vertical-slice` localizadas.
- `npm test` fuera del sandbox de red local, 2026-10-20: **1 prueba aprobada, 0 fallidas**.
- La primera ejecución dentro del sandbox falló con `EACCES` al conectar a `127.0.0.1`; no fue un fallo funcional. La repetición autorizada fuera de esa restricción completó correctamente.
