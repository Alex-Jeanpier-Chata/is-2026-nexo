HELA — Guía de contribución
Equipo Nexo · Ingeniería de Software I · UNJBG · 2026-II

1. Alcance
Este documento establece las condiciones para proponer, desarrollar, revisar, integrar y versionar cambios en HELA. Se aplica al código fuente, la documentación, la configuración y las dependencias del proyecto.

La guía complementa los acuerdos de desarrollo del equipo y el estándar de construcción. Las decisiones técnicas y los requisitos aprobados conservan su vigencia; cualquier modificación de su alcance debe discutirse y registrarse antes de integrarse.

La práctica de contribución de Nexo se basa en cambios pequeños, integración frecuente y revisión entre integrantes. Ningún cambio se incorpora al tronco sin un pull request aprobado por otra persona y sin el resultado documentado del control de comportamiento correspondiente.

2. Organización del repositorio
El repositorio oficial de HELA utiliza dos ramas permanentes:

develop es el tronco operativo: reúne las contribuciones revisadas que forman parte del desarrollo compartido.
main conserva los estados estables del sistema. Los cambios procedentes de develop se trasladan mediante un pull request específico y revisado.
El trabajo individual se realiza en ramas de tema, creadas a partir de develop. Estas ramas se destinan a una tarea concreta y se integran tan pronto como el cambio pueda comprobarse sin comprometer el funcionamiento del tronco.

Un issue identifica una tarea o problema; un commit registra un cambio en el historial; un pull request (PR) permite revisar ese cambio antes de integrarlo; y una etiqueta (tag) identifica una versión específica del proyecto.

3. Flujo de contribución
Definir el trabajo. Cada contribución se vincula con un issue o elemento del tablero que indique el objetivo, el responsable y los criterios de aceptación. Las dudas que afecten requisitos o decisiones vigentes se resuelven en ese registro.
Preparar la rama. Se actualiza develop y se crea una rama de tema con el nombre establecido en esta guía. La rama contiene un objetivo acotado.
Desarrollar el cambio. El autor modifica únicamente los elementos necesarios y sigue el estándar de construcción, el contrato de interfaces y la documentación vigente que correspondan a su tarea.
Registrar los cambios. Los commits deben ser comprensibles, coherentes y estar vinculados a la tarea. Antes de confirmarlos se revisan las diferencias y los errores de formato.
Comprobar el resultado. El autor ejecuta el control aplicable, registra qué comprobó y consigna su resultado real. Si existe una limitación o un fallo, debe quedar indicado.
Solicitar revisión. Se publica la rama y se abre un PR hacia develop. Otro integrante revisa las modificaciones y solicita correcciones cuando sean necesarias.
Integrar y actualizar la tarea. La integración se realiza solo después de la aprobación independiente y de verificar los controles. El issue o elemento del tablero se actualiza con el resultado y la referencia al PR.
El PR debe describir el cambio, explicar su motivo, identificar la tarea, indicar las verificaciones realizadas y mencionar las limitaciones conocidas. La plantilla de pull request es el punto de partida para registrar esta información.

Entorno y comprobaciones disponibles
HELA utiliza Git, Node.js y npm. Para trabajar con una copia nueva del repositorio:

git clone https://github.com/Alex-Jeanpier-Chata/is-2026-nexo.git
cd is-2026-nexo
git switch develop
npm ci
npm test

El proyecto dispone también de npm run dev para iniciar el servidor en modo de desarrollo. Los comandos vigentes se consultan en package.json; no se consideran disponibles herramientas o scripts que todavía no estén configurados allí.

4. Política de ramas
R-01. Rama de integración. Las contribuciones ordinarias se incorporan a develop. main se mantiene como rama estable. No se realizan cambios directos sobre ninguna de las dos ramas.

Fundamento: acuerdos de Nexo S03 y desarrollo basado en tronco descrito por Forsgren, Humble y Kim (2018, cap. 4).
Verificación: quien integra comprueba el destino del PR y su historial.
R-02. Identificación de ramas. Se utiliza la forma <tipo>/sNN-<descripcion>, con palabras breves y separadas por guiones. El nombre debe permitir reconocer la tarea; por ejemplo, docs/s11-guia-contribucion.

Los tipos utilizados son feat (funcionalidad), fix (corrección), docs (documentación), refactor (reorganización sin cambio de comportamiento), test (pruebas) y chore (mantenimiento o configuración).

Fundamento: convención de Nexo S03 y ramas de tema de Chacon y Straub (2014, sec. 3.4).
Verificación: el revisor contrasta el nombre de la rama con su tarea asociada.
R-03. Duración. Los cambios se organizan para integrarse preferentemente dentro de un día. La duración máxima ordinaria es de tres días calendario, medida desde el primer commit de la rama hasta su integración. Si surge un impedimento, se registra oportunamente en el tablero y se decide si el trabajo puede dividirse en partes verificables o requiere una excepción justificada.

El límite conserva el acuerdo de Nexo S03. Frente a la referencia de ramas de menos de un día indicada en Accelerate, considera que los integrantes desarrollan el proyecto a tiempo parcial y deben compatibilizarlo con sus actividades académicas.

Fundamento: Forsgren, Humble y Kim (2018, cap. 4) y acuerdos de Nexo S03.
Verificación: el responsable del tablero compara el primer commit y la fecha de integración, y revisa las excepciones registradas.
R-04. Trabajo simultáneo. El equipo limita a tres ramas de tema activas el trabajo paralelo, sin contar develop y main, y procura mantener menos cuando la organización de las tareas lo permita. Una rama sin actividad debe revisarse, no permanecer abierta indefinidamente.

Fundamento: límite definido para Nexo tomando como referencia el indicador de menos de tres ramas activas de Accelerate (2018, cap. 4).
Verificación: el coordinador contrasta las ramas remotas con sus tareas y responsables.
R-05. Integración y protección. Toda contribución requiere un PR, la aprobación de otro integrante y un control de comportamiento documentado. Se prohíbe reescribir de manera forzada el historial compartido o eliminar las ramas principales. Las protecciones de GitHub deben respaldar estas condiciones.

Fundamento: regla de integración del curso S11; Chacon y Straub (2014, sec. 3.6); acuerdos de Nexo S03.
Verificación: quien integra comprueba las aprobaciones, los controles anotados y las reglas de protección aplicables.
R-06. Cierre de ramas. Las ramas integradas dejan de ser necesarias una vez comprobado que su trabajo está en el tronco. Si una rama no se integra, su contenido y el motivo de la decisión se conservan en el issue o tablero antes de cerrarla. No se pierde trabajo pendiente por el solo hecho de retirar una rama.

Fundamento: procedimiento de decisión y partición de ramas de la práctica S11.
Verificación: el responsable del tablero comprueba la referencia al PR o al registro de trabajo pendiente.
5. Política de commits
C-01. Mensajes uniformes. Los mensajes se escriben en español y siguen la estructura <tipo>: <acción en imperativo>. El asunto debe describir el cambio de forma concreta y ocupar, de preferencia, alrededor de 50 caracteres.

Fundamento: Chacon y Straub (2014, sec. 5.2, p. 131) y convención de Nexo S03.
Verificación: el revisor lee los mensajes del PR.
C-02. Cambios coherentes. Cada commit reúne modificaciones vinculadas a una misma finalidad. No se mezclan tareas independientes ni se utilizan mensajes imprecisos como «avances» o «cambios varios».

Fundamento: Chacon y Straub (2014, sec. 5.2, p. 130).
Verificación: el revisor compara el mensaje con los archivos y diferencias del commit.
C-03. Explicación y trazabilidad. Cuando el asunto no sea suficiente, se agrega un cuerpo después de una línea en blanco para explicar el motivo del cambio y su relación con el comportamiento anterior. El asunto o el cuerpo identifica el issue o elemento del tablero. En refactorizaciones se consigna además la heurística aplicada.

Fundamento: Chacon y Straub (2014, sec. 5.2, p. 131); regla de trazabilidad S11 y estándar de construcción S10.
Verificación: el revisor contrasta la referencia y el motivo con la tarea y el cambio realizado.
C-04. Revisión previa. Antes de confirmar modificaciones se ejecuta git diff --check; si los archivos ya están preparados con git add, se utiliza git diff --cached --check. Los errores detectados se corrigen antes del commit.

Fundamento: Chacon y Straub (2014, sec. 5.2, p. 130).
Verificación: el autor realiza el control y el revisor comprueba que no se incorporen defectos evidentes de formato.
Ejemplo de mensaje:

refactor: simplifica la validación del pedido

Aplica la heurística G28 a la validación de CU-06.
Refs #XX

XX representa el número del issue correspondiente. Los mensajes anteriores a la adopción de esta política se conservan sin reescribir el historial publicado.

6. Política de etiquetas y versiones
V-01. Tipo de etiqueta. Las versiones entregadas se identifican mediante etiquetas anotadas, que almacenan un mensaje, la identidad de quien las crea y su fecha. No se usan etiquetas ligeras para establecer líneas base de entrega.

Fundamento: Chacon y Straub (2014, sec. 2.6, p. 56).
Verificación: el responsable del cierre comprueba en Git que la etiqueta remota corresponde a un objeto de tipo tag.
V-02. Identificación y alcance. El equipo utiliza una numeración legible basada en vMAYOR.MENOR.PARCHE; para identificar cierres de sprint puede añadir el sufijo -sprintN. El número se define según la versión realmente cerrada. Solo se etiqueta un commit aprobado del tronco, después de integrar y comprobar los cambios que formarán parte de la entrega.

Fundamento: criterio de identificación de versiones del equipo; Chacon y Straub (2014, sec. 5.3) y Sommerville (2016, sec. 25.4).
Verificación: quien prepara la entrega comprueba el nombre, el commit señalado y el alcance aprobado.
V-03. Notas de versión. Cada cierre registra las capacidades incorporadas, las limitaciones o problemas conocidos y los requisitos de entorno necesarios para utilizar o reproducir esa versión. No se presentan cambios pendientes como funcionalidades entregadas.

Fundamento: IEEE Computer Society (2024, SWEBOK v4.0, KA 8, sec. 6.2).
Verificación: un integrante distinto de quien etiqueta contrasta las notas con el historial y la documentación del proyecto.
V-04. Publicación e integridad. La etiqueta se envía expresamente al repositorio remoto y, una vez publicada como línea base de entrega, no se mueve para apuntar a otro commit.

Fundamento: Chacon y Straub (2014, sec. 2.6, pp. 58-59); principio de recuperación de versiones del curso S11.
Verificación: el responsable del cierre comprueba su presencia en GitHub y la correspondencia con el commit registrado.
Para publicar una etiqueta anotada se utiliza git tag -a con el nombre y las notas aprobadas, seguido de git push origin <nombre-etiqueta>. La etiqueta no se publica automáticamente al enviar una rama.

7. Política de dependencias
D-01. Registro. Las dependencias directas de HELA se declaran en package.json. El archivo package-lock.json se mantiene versionado para conservar las versiones resueltas e instalar ese conjunto de paquetes mediante npm ci.

Fundamento: IEEE Computer Society (2024, SWEBOK v4.0, KA 4, sec. 2.4) y documentación del gestor npm.
Verificación: el revisor comprueba que ambos archivos sean coherentes y formen parte del cambio cuando corresponda.
D-02. Versiones controladas. Las dependencias directas nuevas se declaran con una versión exacta. Las declaraciones existentes que no cumplan este criterio se adecúan mediante tareas y PR específicos, para no introducir cambios ajenos al objetivo de otra contribución.

Fundamento: regla de versiones fijadas de la práctica S11.
Verificación: el revisor examina la versión declarada, el archivo de bloqueo y la justificación de los cambios.
D-03. Incorporación justificada. Una dependencia nueva solo puede incorporarse mediante PR. La solicitud debe responder tres preguntas: para qué se necesita y qué permite reutilizar, qué licencia tiene y quién la mantiene. Se revisa también si existen alternativas en el proyecto y riesgos conocidos de mantenimiento o seguridad.

Fundamento: IEEE Computer Society (2024, SWEBOK v4.0, KA 4, sec. 2.4) y regla de admisión de la práctica S11.
Verificación: el revisor comprueba las respuestas y la modificación de los archivos de dependencias antes de aprobar.
D-04. Actualización y retiro. Las actualizaciones o eliminaciones se registran como cambios independientes cuando puedan afectar el comportamiento del sistema. Se justifican y se comprueban antes de integrarse.

Fundamento: IEEE Computer Society (2024, SWEBOK v4.0, KA 4, sec. 2.4).
Verificación: el revisor contrasta los cambios de versiones y el resultado de las pruebas o controles ejecutados.
Actualmente, package.json declara Express como ^5.2.1, mientras que el archivo de bloqueo registra la versión resuelta 5.2.1. Esa declaración existente requiere una evaluación específica para ajustarse a la regla de versiones directas exactas; no se modifica de forma incidental en otro PR.

8. Revisión y aceptación
La revisión independiente y la comprobación del comportamiento son condiciones distintas. El autor demuestra que evaluó el resultado del cambio; el revisor determina si la contribución es coherente y está suficientemente verificada.

En cada PR deben constar:

El issue o elemento del tablero y el propósito de la modificación.
Los archivos o componentes afectados y, cuando corresponda, las decisiones técnicas relacionadas.
El control de comportamiento realizado, el procedimiento utilizado y su resultado.
Las limitaciones conocidas y las observaciones resueltas durante la revisión.
La aprobación de una persona distinta del autor antes de la integración.
Para los cambios de código, el control incluye las pruebas existentes que correspondan (npm test) y la comprobación del comportamiento modificado. Para cambios documentales, se revisan consistencia, referencias y rutas, además de los controles ejecutables que resulten pertinentes. No se declara satisfactoria una prueba que no se haya realizado.

Una contribución se considera terminada cuando satisface los criterios de aceptación de su tarea, respeta el estándar de construcción y la documentación vigente, supera las comprobaciones correspondientes, recibe aprobación independiente y está integrada en develop. La sola existencia de un commit o de un PR abierto no constituye una tarea terminada.

Responsabilidades
Función	Responsabilidad y evidencia
Autor	Desarrolla el cambio, mantiene la referencia a la tarea y documenta sus verificaciones en el PR.
Revisor	Examina el trabajo de otra persona, registra observaciones y aprueba únicamente cuando se cumplen los criterios.
Integrador	Comprueba revisión y controles antes de fusionar; el registro del PR acredita la integración.
Coordinación del equipo	Supervisa las ramas activas, los impedimentos y la actualización del tablero.
Responsable de versión	Verifica el estado que se entrega, sus notas y la publicación de la etiqueta.
Administración del repositorio	Mantiene las reglas que impiden la integración directa y la alteración del historial de las ramas principales.
Estas funciones se asignan a integrantes identificables mediante los issues, PR y acuerdos de coordinación. La persona autora de un cambio no sustituye la revisión de otro integrante.

9. Seguimiento de la política
Para verificar que las reglas se cumplen, Nexo utiliza registros de Git y GitHub, no estimaciones personales. En cada corte de evaluación o entrega se revisan:

Ramas activas: cantidad de ramas de trabajo abiertas frente al límite declarado.
Duración de integración: tiempo desde el primer commit de cada rama integrada hasta su incorporación al tronco.
Calidad del historial: commits del periodo cuyos mensajes cumplen la convención frente al total revisado.
Revisión efectiva: PR integrados con aprobación independiente y control de comportamiento registrado frente al total integrado.
Versiones identificables: etiquetas anotadas que están publicadas en el repositorio remoto.
Las cifras, las fechas de corte y los enlaces de evidencia se consignan en el informe de la entrega correspondiente. Las excepciones se explican sin modificar retrospectivamente los registros publicados.

10. Referencias
Chacon, S., & Straub, B. (2014). Pro Git (2.ª ed.). Apress.
Forsgren, N., Humble, J., & Kim, G. (2018). Accelerate: The Science of Lean Software and DevOps. IT Revolution Press.
IEEE Computer Society. (2024). Guide to the Software Engineering Body of Knowledge (SWEBOK Guide), versión 4.0.
Sommerville, I. (2016). Software Engineering (10.ª ed.). Pearson.
Universidad Nacional Jorge Basadre Grohmann. (2026). Guía práctica y guía de referencia de Ingeniería de Software I, Semana 11.
Equipo Nexo. Guía de desarrollo y acuerdos S03; estándar de construcción HELA S10.
Esta guía rige los cambios posteriores a su aprobación e integración en develop. El historial compartido anterior se conserva y cualquier excepción relevante queda documentada mediante los mecanismos de seguimiento del proyecto.
