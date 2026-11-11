# HELA — Guía de contribución y gestión de versiones

**Equipo Nexo · Ingeniería de Software I · UNJBG · 2026-II**

| Control documental | Registro |
|---|---|
| Versión de la guía | 1.0 — revisión para integración |
| Última actualización | 10 de noviembre de 2026 |
| Fecha de aprobación | Pendiente de aprobación en el PR |
| Instancia de aprobación | Equipo Nexo, bajo coordinación de Oscar Fabian Choque Palza |
| Repositorio | [Alex-Jeanpier-Chata/is-2026-nexo](https://github.com/Alex-Jeanpier-Chata/is-2026-nexo) |

## 1. Propósito y alcance

Esta guía establece cómo el Equipo Nexo propone, desarrolla, revisa, integra y versiona las modificaciones de **HELA**, un sistema de gestión para restaurantes. Se aplica al código, las interfaces, la documentación, la configuración y las dependencias del repositorio.

El trabajo se organiza alrededor de cambios pequeños, tareas identificables y revisión entre integrantes. **Ningún cambio se integra en el tronco sin un pull request (PR) aprobado por una persona distinta de su autor y sin registrar el control de comportamiento correspondiente.**

La guía complementa los [acuerdos de desarrollo del equipo](docs/proceso/HELA_Guia_Desarrollo_y_Contribucion_v1.0.md), el [estándar de construcción S10](docs/proceso/HELA_S10_Estandar_Construccion_v1.1.md) y los acuerdos de organización de la Semana 03. No reemplaza requisitos, decisiones de arquitectura ni contratos de interfaces previamente aprobados.

## 2. Integrantes y responsabilidades

Las funciones se distribuyen conforme a los roles existentes del equipo y a las verificaciones del estándar S10. La coordinación asigna responsables concretos a cada tarea en su issue; una persona puede desempeñar varias funciones, **pero nunca aprobar su propio PR**.

| Integrante | Función principal | Responsabilidades en el proceso de contribución |
|---|---|---|
| **Oscar Fabian Choque Palza** | Coordinación del equipo | Coordina el tablero y las tareas, supervisa plazos y excepciones de ramas, consolida las métricas de Git y valida con el equipo la versión que se cerrará. Revisa formato y criterios de medición según S10. |
| **Alex Jeanpier Chata Chino** | Administración del repositorio e integración | Revisa y administra las protecciones de `develop` y `main`, coordina las integraciones y la publicación de etiquetas anotadas. Comprueba los aspectos técnicos de funciones, dependencias y conflictos de integración, según su alcance. |
| **Helber Junior Lope Apomayta** | Custodia de OpenAPI y coherencia técnica | Verifica que los cambios de interfaces y documentación conserven el contrato OpenAPI y la terminología de HELA. Revisa nombres y convenciones del código cuando correspondan y contribuye a la revisión cruzada de PR. |
| **Elvis Ronald Arocutipa Quispe** | Consolidación y control de entregables | Consolida evidencias, notas de versión e informes; verifica comentarios, documentación y registro de controles de comportamiento. Coordina la revisión humana de los cambios conforme al estándar S10. |

**Responsabilidades compartidas.** El **autor** desarrolla y verifica el cambio; el **revisor** comprueba el contenido de otra persona; el **integrador** confirma aprobaciones y controles antes de fusionar; y el **responsable del issue** actualiza la tarea y conserva la evidencia. Si Alex es autor de un PR, la revisión debe hacerla otro integrante; la administración del repositorio no sustituye la aprobación independiente.

El equipo procura emitir un primer comentario de revisión dentro de las 24 horas siguientes a la apertura de un PR, conforme a los acuerdos S03. Las menciones directas se responden dentro de las 24 horas hábiles.

## 3. Flujo de trabajo

1. **Registrar la tarea.** Todo cambio parte de un issue o elemento del tablero que identifique el objetivo, su responsable, las referencias y los criterios de aceptación. Las dependencias o decisiones pendientes se declaran antes de iniciar el trabajo.
2. **Crear una rama de tema.** Se parte de `develop` actualizado y se trabaja únicamente sobre el alcance de la tarea.
3. **Realizar y registrar cambios.** Se aplican los estándares vigentes, se preparan commits coherentes y se mantiene la referencia al issue.
4. **Comprobar el resultado.** El autor ejecuta las verificaciones aplicables y registra los comandos o procedimientos, resultados y limitaciones reales.
5. **Solicitar revisión.** Se abre un PR dirigido a `develop`, utilizando la [plantilla del repositorio](.github/PULL_REQUEST_TEMPLATE.md). Otro integrante evalúa el cambio y formula observaciones cuando corresponda.
6. **Integrar y cerrar.** Una vez resueltas las observaciones y vigente la aprobación, se integra el PR. El responsable actualiza el issue con los enlaces y las evidencias de aceptación.

HELA utiliza Git, Node.js y npm. El entorno se obtiene del repositorio oficial y las dependencias se instalan con `npm ci`. Los controles actualmente disponibles incluyen `npm test` y, para cambios de Git, `git diff --check` o `git diff --cached --check`. Los comandos que todavía no figuren en `package.json` no se consideran controles implementados.

## 4. Política de ramas

**R-01. Tronco y rama estable.** `develop` es el tronco operativo donde se integran los cambios revisados; `main` conserva los estados estables. La incorporación de `develop` a `main` también exige PR y revisión. No se realizan cambios directos a ninguna de las dos ramas.

- *Fundamento:* acuerdos Nexo S03; Forsgren, Humble y Kim (2018, cap. 4).
- *Verificación:* Alex, o el integrador designado, comprueba las ramas de origen y destino, el PR y su historial.

**R-02. Nomenclatura.** La forma ordinaria es `<tipo>/sNN-<descripcion>`, donde **`sNN` es la semana académica del curso**, escrita con dos cifras (`s03`, `s10`, `s11`); no representa el número de sprint. Los tipos admitidos son `feat`, `fix`, `docs`, `refactor`, `test` y `chore`. Ejemplo: `docs/s11-guia-contribucion`.

Para una tarea de mantenimiento sin semana específica se utiliza `<tipo>/issue-<numero>-<descripcion>`; por ejemplo, `fix/issue-28-validacion-pedido`. La referencia al issue se mantiene también en el PR.

- *Fundamento:* convención de Nexo S03; Chacon y Straub (2014, sec. 3.4); extensión para tareas no semanales acordada en esta guía.
- *Verificación:* el revisor compara el nombre de la rama con la tarea vinculada.

**R-03. Vida de las ramas.** Se procura integrar cambios en menos de un día. El límite ordinario de Nexo es **tres días calendario**, medido desde el primer commit hasta la integración, conforme al acuerdo S03 y a la disponibilidad académica del equipo. La referencia de *Accelerate* es una duración inferior a un día, por lo que cualquier periodo mayor debe justificarse.

Cuando exista riesgo de superar el límite, el autor informa el impedimento dentro de las 24 horas de detectarlo y solicita una excepción **antes del vencimiento**, en el issue o tablero. La solicitud indica motivo, alcance pendiente, responsable y nueva fecha de revisión. **Oscar autoriza o rechaza la excepción** tras revisar su impacto con Alex; la decisión y fecha quedan registradas en el issue. Si Oscar es el solicitante, **Alex registra la autorización con la revisión de otro integrante** para evitar una autoaprobación. Siempre se prefiere dividir la tarea en cambios verificables.

- *Fundamento:* acuerdos Nexo S03; Forsgren, Humble y Kim (2018, cap. 4); regla de partición S11.
- *Verificación:* Oscar coteja fechas y excepciones documentadas; Elvis comprueba que se conserven en el informe cuando corresponda.

**R-04. Ramas simultáneas.** Se mantiene un máximo operativo de **tres ramas de tema activas**, sin contar `develop` y `main`; el equipo procura trabajar con menos. Este umbral debe evaluarse con los resultados reales del equipo frente a la referencia de menos de tres ramas activas de *Accelerate*.

- *Fundamento:* decisión de organización del equipo a ratificar en el PR; Forsgren, Humble y Kim (2018, cap. 4).
- *Verificación:* Oscar revisa las ramas remotas y su asociación con tareas activas.

**R-05. Integración y conservación.** Ninguna rama se integra sin PR, aprobación independiente y control de comportamiento documentado. No se permite reescribir de manera forzada el historial compartido, ni eliminar las ramas principales. Las ramas de tema ya integradas se retiran cuando se comprueba que su trabajo está en el tronco; las pendientes se integran, dividen o cierran conservando su trazabilidad.

- *Fundamento:* regla de integración S11; Chacon y Straub (2014, secs. 3.6 y 6.2).
- *Verificación:* Alex comprueba el historial, las aprobaciones y el registro de las decisiones en el issue.

## 5. Política de commits

**C-01. Mensajes.** Los commits se escriben en español con el formato `<tipo>: <acción en imperativo>`. El asunto es específico y, de preferencia, de unos 50 caracteres. Se evita «cambios varios» o «avance».

**C-02. Unidad de cambio.** Cada commit contiene una modificación lógica y coherente con la tarea; las acciones distintas se registran por separado.

**C-03. Motivo y trazabilidad.** Cuando sea necesario, el cuerpo del mensaje explica por qué se modificó el comportamiento o la estructura, separado del asunto por una línea en blanco. El asunto o el cuerpo hace referencia al issue. En refactorizaciones se identifica también la heurística de S10.

**C-04. Comprobación previa.** Antes de confirmar se revisan las diferencias y se ejecuta `git diff --check`; para cambios ya preparados se utiliza `git diff --cached --check`. Los errores se corrigen antes del commit. Los mensajes anteriores a la adopción de esta política se conservan sin reescribir el historial publicado.

Ejemplo:

```text
refactor: simplifica la validación del pedido

Aplica la heurística G28 a la validación de CU-06.
Refs #28
```

- *Fundamento de C-01 a C-04:* Chacon y Straub (2014, sec. 5.2, pp. 130-131); convención Nexo S03; trazabilidad y heurísticas de S10-S11.
- *Verificación:* el autor comprueba las diferencias; el revisor contrasta los mensajes, su contenido y las referencias en el historial del PR.

## 6. Revisión, aprobación e integración de PR

Un PR puede aprobarse únicamente cuando cumple, según el tipo de cambio, los siguientes criterios:

1. **Alcance y trazabilidad.** Existe una tarea con criterios de aceptación y el PR explica qué cambia, por qué y qué archivos o componentes afecta.
2. **Consistencia.** La contribución respeta la arquitectura, los requisitos, el contrato OpenAPI cuando corresponda y el estándar de construcción S10.
3. **Historial.** La rama y los commits cumplen las convenciones; no se agregan archivos ajenos a la tarea.
4. **Control verificable.** El autor registra el procedimiento, la fecha y el resultado real de las comprobaciones. Para cambios de código se ejecutan las pruebas pertinentes, incluido `npm test` cuando corresponda. Para documentación se revisan contenido, enlaces y referencias.
5. **Revisión independiente.** Otro integrante examina los cambios y registra su aprobación; el autor no puede aprobarse a sí mismo.

Las observaciones del revisor se atienden en la **misma conversación del PR**. El autor responde, corrige mediante nuevos commits y solicita una nueva comprobación cuando sea necesaria. Cada comentario se marca como resuelto solo cuando la corrección está verificada o existe una decisión documentada aceptada por el revisor.

**Si se agregan commits después de una aprobación, la revisión debe renovarse antes de integrar.** Las reglas de GitHub deben invalidar aprobaciones anteriores cuando cambie el contenido; si ese ajuste aún no está activo, el integrador solicitará expresamente una nueva revisión. No se presume que la aprobación antigua cubra modificaciones posteriores.

El primer comentario de revisión debe emitirse en un máximo de 24 horas según S03. Esta primera respuesta no equivale a la aprobación definitiva.

- *Fundamento:* acuerdos Nexo S03; DoD del equipo; regla de integración S11; estándar S10.
- *Verificación:* el revisor y Alex comprueban la aprobación vigente, los comentarios resueltos y el registro del control antes del merge.

### Conflictos de integración

Si Git detecta cambios incompatibles entre la rama de trabajo y `develop`, **el autor de la rama** identifica los archivos afectados y resuelve los conflictos con la versión vigente del tronco como referencia. No se aceptan automáticamente ambas versiones ni se descartan cambios de otro integrante sin analizar su efecto.

Después de resolverlos, el autor revisa las diferencias finales, ejecuta los controles pertinentes y describe en el PR qué se decidió y qué resultado obtuvo. **Alex comprueba la solución técnica o asigna la comprobación a otro integrante cuando sea autor del cambio; Elvis contrasta el control de comportamiento.** Si la resolución introduce modificaciones posteriores a una aprobación, el PR debe ser revisado de nuevo.

No se utilizará `push --force` sobre ramas compartidas para ocultar o resolver conflictos. Si el conflicto implica un requisito o una decisión arquitectónica, se registra y acuerda su resolución antes de integrar.

- *Fundamento:* Sommerville (2016, sec. 25.1); Chacon y Straub (2014, sec. 3.6); regla de revisión S11.
- *Verificación:* diferencia final del PR, explicación del conflicto, controles ejecutados y aprobación renovada.

## 7. Protección de ramas en GitHub

Las siguientes condiciones deben estar configuradas y verificadas tanto para **`develop`** como para **`main`**:

| Condición | Efecto esperado |
|---|---|
| Exigir un PR antes de integrar | Impide incorporar cambios directamente a la rama protegida. |
| Requerir al menos una aprobación independiente | Impide que la revisión del autor sustituya a la de otro integrante. |
| Invalidar aprobaciones ante nuevos cambios | Obliga a revisar nuevamente el contenido modificado después de la aprobación. |
| Exigir la resolución de conversaciones | Evita integrar con observaciones de revisión sin resolver. |
| Bloquear eliminaciones y actualizaciones forzadas | Protege el historial y las líneas base compartidas. |

**Alex** administra estas reglas y verifica su efecto con Oscar. Si una protección no puede aplicarse por permisos o restricciones de GitHub, se registra la limitación en el issue correspondiente y **no se declara configurada**. Hasta corregirla, el integrador debe comprobar manualmente las mismas condiciones y dejar evidencia en el PR.

No se declara como obligatorio un control automático que todavía no esté implementado. El trabajo de automatización se incorpora únicamente cuando haya sido aprobado e integrado.

- *Fundamento:* regla de integración y configuración del curso S11; acuerdos Nexo S03; documentación oficial de GitHub sobre reglas de protección.
- *Verificación:* Alex conserva la configuración o el registro de la limitación; Oscar comprueba que las integraciones cumplan la política.

## 8. Dependencias y documentación técnica

**D-01. Registro reproducible.** Las dependencias se declaran en `package.json` y sus versiones resueltas se conservan en `package-lock.json`. La instalación reproducible se realiza mediante `npm ci`.

**D-02. Versiones controladas.** Las dependencias directas nuevas se incorporan con versión exacta. Una declaración anterior distinta se ajusta mediante un cambio específico, revisado, sin añadir modificaciones ajenas a otros PR.

**D-03. Incorporación responsable.** Toda dependencia nueva requiere un PR que responda: **para qué sirve y qué reutiliza, qué licencia tiene y quién la mantiene**. Se consideran alternativas existentes y riesgos conocidos.

**D-04. Actualización y retiro.** Los cambios de versiones o eliminación de dependencias se justifican y se comprueba su impacto antes de integrarlos.

Actualmente, Express se declara como `^5.2.1` en `package.json`, mientras que el archivo de bloqueo registra la versión resuelta `5.2.1`. Su adecuación a una versión directa fija requiere una tarea específica; no se modifica incidentalmente en un PR documental.

- *Fundamento de D-01 a D-04:* IEEE Computer Society (2024, SWEBOK v4.0, KA 4, sec. 2.4); regla de dependencias del curso S11.
- *Verificación:* Alex revisa la necesidad, las versiones y el control de comportamiento; Elvis comprueba que la justificación y la evidencia queden registradas.

### Actualización de documentación

El **autor de una modificación** actualiza, dentro del mismo PR, los documentos necesarios para que el repositorio refleje su estado real:

| Tipo de modificación | Documentación que debe revisarse | Verificación principal |
|---|---|---|
| Interfaces HTTP, solicitudes o respuestas | Contrato OpenAPI y referencias asociadas | **Helber** contrasta el contrato y su implementación. |
| Arquitectura, responsabilidades de módulos o decisiones técnicas | Documentos de arquitectura y decisiones vigentes | **Alex** verifica la coherencia con el diseño aprobado. |
| Dependencias, comandos o configuración del entorno | `package.json`, `package-lock.json` y guías de ejecución afectadas | **Alex** comprueba la configuración; **Elvis** revisa que las instrucciones sean consistentes. |
| Funcionalidad o criterios de aceptación | Especificación y documentación funcional relacionada, cuando corresponda | **Oscar** coordina la validación con el responsable del requisito. |
| Entregas, versiones y evidencias | Notas de versión, registro de cambios e informe correspondiente | **Elvis** consolida las referencias y evidencias. |

Cuando un cambio afecta una decisión aprobada, debe acordarse antes de modificar la documentación o su implementación. La actualización no se considera completa si deja inconsistencias entre código, contrato y documentos vigentes.

## 9. Etiquetas y gestión de versiones

**V-01. Identificación.** Las entregas se identifican con etiquetas **anotadas**. Se utiliza la forma `vMAYOR.MENOR.PARCHE`, con un sufijo descriptivo para un cierre de sprint cuando corresponda. La numeración debe reflejar el alcance efectivamente integrado y no se asigna automáticamente por la fecha.

**V-02. Decisión y preparación.** **Alex propone el número y el commit que se etiquetará** a partir del historial de `develop`. **Oscar coordina su validación y autoriza el cierre con el acuerdo del equipo**; si Oscar es autor del cambio que define la entrega, la validación cruzada debe constar expresamente. **Elvis prepara las notas** con cambios incorporados, problemas conocidos y requisitos de entorno. Helber comprueba las referencias a interfaces cuando formen parte de la entrega.

**V-03. Publicación y comprobación.** Tras el acuerdo, **Alex crea y publica la etiqueta anotada** sobre el commit aprobado. **Elvis verifica que las notas correspondan al historial** y Oscar comprueba la presencia de la etiqueta en el repositorio remoto. Una etiqueta publicada como línea base no se traslada a otro commit.

**V-04. Recuperación.** Las notas de cada entrega indican el identificador de la etiqueta, las capacidades disponibles, las limitaciones conocidas y las condiciones necesarias para reconstruir esa versión. El contenido que siga en ramas pendientes no forma parte de la entrega.

- *Fundamento de V-01 a V-04:* Chacon y Straub (2014, secs. 2.6 y 5.3); Sommerville (2016, sec. 25.4); IEEE Computer Society (2024, KA 8, sec. 6.2); acuerdo de responsabilidades del equipo.
- *Verificación:* Oscar comprueba la autorización y la etiqueta remota; Alex acredita el commit y tipo de etiqueta; Elvis coteja las notas con la versión publicada.

## 10. Cierre de tareas e incidencias

Un issue pasa a **terminado** únicamente cuando se cumple su objetivo y criterios de aceptación, el cambio está integrado en `develop`, existen una revisión independiente y controles registrados, y la documentación relacionada está actualizada. Si el issue corresponde solo a una decisión o investigación, deben existir la decisión y su evidencia verificable, sin exigir un cambio de código inexistente.

El **responsable asignado al issue** registra el resultado y añade los enlaces al PR, commits, verificaciones y documentos pertinentes. **Oscar comprueba el cumplimiento de los criterios** y coordina el cierre del elemento en el tablero. El issue de GitHub se cierra después de esa comprobación, por el responsable o la persona designada para mantener el tablero.

No se cierra una tarea solo porque se creó una rama, se realizó un commit o se abrió un PR. Si queda trabajo parcial, el issue permanece abierto o se crea uno nuevo con el alcance pendiente y sus referencias. Los impedimentos y las decisiones no resueltas deben conservarse de manera visible.

- *Fundamento:* Definición de Preparado (DoR) y Definición de Terminado (DoD) del Equipo Nexo S03; trazabilidad exigida por la práctica S11.
- *Verificación:* Oscar revisa estado y criterios; Elvis comprueba que el registro incluya los enlaces de evidencia.

## 11. Seguimiento de métricas

El cumplimiento de la política se comprueba con registros de Git y GitHub, utilizando un corte de fechas definido y sin reconstruir cifras de memoria. **Oscar recopila los datos al cierre de cada semana de trabajo y en cada cierre de sprint**; **Elvis consolida las evidencias en el informe**, y **Oscar presenta los resultados al equipo y en la entrega académica cuando corresponda**. Los demás integrantes revisan los datos de sus PR y corrigen posibles omisiones antes del cierre.

| Indicador | Criterio de medición | Evidencia |
|---|---|---|
| Ramas de tema abiertas | Cantidad de ramas activas al momento del corte, comparada con el máximo acordado. | Referencias remotas y tablero. |
| Duración de las ramas integradas | Tiempo entre el primer commit de cada rama y su integración al tronco. | Historial y fecha de integración del PR. |
| Conformidad de commits | Commits del periodo con mensajes acordes a la política, frente al total examinado. | Historial del periodo. |
| Revisión y control de PR | PR integrados con aprobación independiente y control de comportamiento anotado, frente al total integrado. | Aprobaciones, conversaciones y registros del PR. |
| Etiquetas anotadas | Número e identificación de etiquetas anotadas publicadas en el repositorio remoto. | Referencias y objetos de etiquetas. |

El informe debe indicar el periodo, el momento del corte, los resultados, las fuentes y cualquier excepción o limitación. Si una cifra no puede determinarse de manera fiable, se declara esa limitación; no se inventa ni se sustituye por una estimación silenciosa. Los registros antiguos no se reescriben para aparentar cumplimiento.

- *Fundamento:* procedimiento de recuento de la guía de referencia S11, apartado 11, y acuerdos de coordinación del Equipo Nexo.
- *Verificación:* Oscar valida los cálculos; Elvis revisa que las cifras coincidan con sus enlaces y el informe.

## 12. Referencias y control de vigencia

### Documentos del equipo y del curso

- **Equipo Nexo (08 de septiembre de 2026).** *Paquete de acuerdos del Equipo Nexo — Semana 03*, versión 0.1: acuerdos de coordinación, Definición de Preparado y Definición de Terminado. [Documento institucional](https://docs.google.com/document/d/1bq9Pmv0l-xHMwFKxcK6vDsX6mtLkdP_g/edit).
- **Equipo Nexo (2026-II).** *HELA — Guía de Desarrollo y Contribución*, versión 1.0. Archivo [`docs/proceso/HELA_Guia_Desarrollo_y_Contribucion_v1.0.md`](docs/proceso/HELA_Guia_Desarrollo_y_Contribucion_v1.0.md).
- **Equipo Nexo (Semana 10, 2026-II).** *HELA — Estándar de construcción del equipo*, versión 1.1. Archivo [`docs/proceso/HELA_S10_Estandar_Construccion_v1.1.md`](docs/proceso/HELA_S10_Estandar_Construccion_v1.1.md).
- **UNJBG, Ingeniería de Software I (Semana 11, 2026-II).** *De la costumbre a la política: guía de contribución y repositorio bajo desarrollo basado en tronco*. [Guía práctica oficial](https://docs.google.com/document/d/1wqKGlSxW_t4iY94K_5qtzOoElx44WtaLXT2oPlEYQUc/edit).
- **UNJBG, Ingeniería de Software I (Semana 11, 2026-II).** *Guía de referencia rápida: gestión de versiones y desarrollo basado en tronco*. [Documento de referencia](https://docs.google.com/document/d/1trxCKtJ2_ICfVIYy6O-ix6boJwCVRb60-6bId4W5Qqs/edit).

### Bibliografía técnica

- Chacon, S., & Straub, B. (2014). *Pro Git* (2.ª ed.). Apress.
- Forsgren, N., Humble, J., & Kim, G. (2018). *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press.
- IEEE Computer Society. (2024). *Guide to the Software Engineering Body of Knowledge (SWEBOK Guide)*, versión 4.0.
- Sommerville, I. (2016). *Software Engineering* (10.ª ed.). Pearson.

### Vigencia y actualización

La guía entra en vigor cuando el Equipo Nexo la aprueba y el PR correspondiente queda integrado en `develop`. **Oscar coordina la aprobación con los cuatro integrantes; Alex conserva la versión publicada en el repositorio; Elvis registra la fecha de aprobación y las actualizaciones.** Toda modificación posterior debe indicar qué política cambia, su motivo y su efecto, y se integra mediante un nuevo PR revisado.

El número de versión y la fecha de última actualización se modifican en el mismo PR que actualice esta guía. La fecha de aprobación se consigna cuando exista evidencia de aprobación; mientras tanto permanece como pendiente. Las decisiones previas y el historial ya publicado se preservan.
