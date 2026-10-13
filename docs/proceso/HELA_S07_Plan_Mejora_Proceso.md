# HELA — Semana 07: plan de mejora del proceso

**Equipo:** Nexo  
**Curso:** Ingeniería de Software I, 2026-II  
**Referencia:** Sprint Retrospective de cierre del Sprint 1; antecedentes documentados de S03, S04 y S06.  
**Fecha de preparación:** 13 de octubre de 2026  
**Estado:** plan documentado con acciones registradas en GitHub; ejecución y acuerdos de retrospectiva pendientes de comprobación.

## 1. Diagnóstico: evidencias y clasificación

El análisis se centra en la calidad del registro, la trazabilidad y la coordinación del trabajo, **sin emitir valoraciones personales**.

| Fricción u oportunidad | Evidencia verificable | Clasificación y alcance |
|---|---|---|
| Uniformar la verificación de DoD y los enlaces entre tareas y cambios | Paquete de acuerdos S03, Issues [#22](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/22), [#23](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/23), [#25](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/25), [PR #26](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/26) | **Fricción de herramientas y proceso:** criterios de acreditación y enlaces verificables, sin inferir falta de trabajo |
| Asegurar seguimiento explícito de la primera revisión de PR | [PR #17](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/17), [PR #20](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/pull/20), PR #26 | **Transferencia entre personas (hipótesis de proceso)**. La duración apertura–integración de PR #20 (15–22/09) **no es** tiempo comprobado en `In Review` |
| Preservar decisiones de requisitos como elementos trazables | [Issue #6](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/6): vigencia del pedido temporal QR, abierto | **Proceso de especificación:** decisión pendiente documentada separadamente de deuda técnica |

**Límite de medición:** el tablero consultado no conserva una cronología suficiente para asignar **días de espera por columna** de manera verificable. Se declara `NO DETERMINABLE`, sin estimar demoras ni atribuirlas a integrantes.

## 2. Plan de acciones con los cuatro datos obligatorios

Los **responsables efectivos para el seguimiento** se toman del campo **Assignees de GitHub al 13/10/2026**; prevalecen sobre los nombres inicialmente indicados como propuestas en la descripción de los Issues. Los plazos representan entradas futuras, no fechas de finalización ya conseguidas.

| Acción / Issue | Cuello de botella u origen y evidencia | Responsable asignado | Entrada | Indicador cuantitativo de verificación |
|---|---|---|---|---|
| **AM-01 — Estandarizar DoD y trazabilidad** [#32](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/32) | Uniformidad de registro de criterios DoD y vínculos a PR/commits; paquete S03, Issues #22/#23/#25, PR #26 | **Elvis Ronald Arocutipa Quispe** (`Elvis-199-afk`) | **S08** | **100 %** de Issues cerrados en el período evaluado con comprobación documentada del DoD y vínculo a PR/commit, cuando corresponda |
| **AM-02 — Seguimiento y revisión de PR** [#33](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/33) | Transferencia de revisión a evaluar; cronología de PR #17/#20/#26 | **Alex Jeanpier Chata Chino** (`Alex-Jeanpier-Chata`) | **Sprint 2, S10–S11** | **≥90 %** de PR del período con primera revisión registrada en **≤48 h** desde su apertura |
| **AM-03 — Seguimiento de decisiones de especificación** [#34](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/34) | Decisión QR documentada por separado; Issue #6 | **Oscar Fabian Choque Palza** (`OscarChoquePalza`) | **S08** | **100 %** de decisiones pendientes identificadas con Issue abierto trazable, responsable y requisito relacionado |

**Criterio de cálculo:** para cada indicador se registra `cumplimientos / casos evaluados × 100`, con enlaces a cada Issue/PR de la muestra. Si no existen casos evaluables en el período, se informa **sin muestra**; nunca 100 % por ausencia de datos.

## 3. Contraste con las acciones propuestas en S06

| Acción de seguimiento derivada de S06 | Registro visible en S07 | Estado verificable |
|---|---|---|
| Aplicar verificación DoD de forma homogénea | [AM-01, Issue #32](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/32) | **Registrada; ejecución no verificada** |
| Favorecer la revisión oportuna de PR | [AM-02, Issue #33](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/33) | **Registrada; ejecución no verificada** |
| Hacer visibles decisiones de especificación | [AM-03, Issue #34](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/34) | **Registrada; ejecución no verificada** |

## 4. Retrospectiva y aportes individuales

Conforme a la guía S07 y a la *Guía de Scrum* (Schwaber y Sutherland, 2020), la retrospectiva examina **personas, interacciones, procesos, herramientas y Definición de Terminado**. Los registros permiten **proponer**, sin atribuir declaraciones reales, estas observaciones para que cada integrante las confirme durante el evento en Miro:

| Integrante | Observación propuesta | Elemento Scrum | Sustento |
|---|---|---|---|
| **Oscar Fabian Choque Palza** | Reforzar visibilidad del seguimiento de revisiones | Interacciones | PR #20 |
| **Alex Jeanpier Chata Chino** | Estandarizar evidencia de revisión y DoD | Definición de Terminado | PR #17 y PR #26 |
| **Helber Junior Lope Apomayta** | Mantener decisiones abiertas en Issues trazables | Procesos | Issue #6 |
| **Elvis Ronald Arocutipa Quispe** | Visibilizar traspasos y revisiones en el tablero | Herramientas e interacciones | PR #20 y GitHub Projects |

**Validación pendiente:** las observaciones son **borradores para ratificación personal**, no transcripciones de intervenciones confirmadas. **La exportación del tablero Miro de la Sprint Retrospective es un artefacto requerido independiente de este plan**; un dashboard elaborado en Canva no sustituye por sí mismo esa evidencia.

## 5. Gobernanza vinculada a S07

- **Hallazgos registrados:** [DT-01 #28](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/28) — Oscar; [DT-02 #29](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/29) — Helber; [DT-03 #30](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/30) — Alex.
- **Función de aptitud declarada:** [FA-01 #31](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/issues/31) — protegida DT-01; `0` solicitudes inválidas aceptadas, automatización **prevista** en **S15**, aún **no implementada**.
- **Vista del tablero:** [Deuda y mejora](https://github.com/users/Alex-Jeanpier-Chata/projects/2/views/2).
- **Mapeo de procesos:** campo `Proceso (hipótesis)` según las guías Deployment Package del perfil básico ISO/IEC 29110; **no es declaración de conformidad**, asunto de S08.

## 6. Publicación y seguimiento

La práctica S07 solicita publicar el **plan**, el **reporte de velocidad/burndown de cierre** y la **exportación auténtica de la retrospectiva en Miro** en `/docs/proceso`, mediante un commit fechado y una PR dirigida a `develop`. Posteriormente se consolidan los enlaces al tablero, vista y commit en Google Docs para su entrega por Classroom. **Hasta comprobar la integración correspondiente, estos documentos conservan el estado de preparación para publicación.**

**Referencias principales:** [Guía de laboratorio S07](https://docs.google.com/document/d/1bngtZ9xkGhrmp_dccNXgK1Cq8HAZN3FJ/edit) · [Acta intermedia S06](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo/blob/develop/docs/proceso/HELA_S06_Acta_Retrospectiva_Intermedia.md) · [GitHub Project](https://github.com/users/Alex-Jeanpier-Chata/projects/2).
