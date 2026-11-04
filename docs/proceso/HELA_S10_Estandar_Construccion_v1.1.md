# HELA — Estándar de construcción del equipo

**Curso:** Ingeniería de Software I (IS1-2026)

**Semana:** 10

**Versión:** 1.1
**Alcance:** código fuente del proyecto, con aplicación prioritaria al módulo base seleccionado para la refactorización de la Semana 10.

## 1. Propósito y reglas de aplicación

Este estándar establece acuerdos comunes para nombrar elementos del código, diseñar funciones, escribir comentarios, organizar el formato, controlar la duplicación y evaluar cinco medidas de complejidad. Su finalidad es que el código sea comprensible y mantenible por cualquiera de los cuatro integrantes.

Las reglas se fundamentan principalmente en las heurísticas de *Clean Code* de Robert C. Martin y en los fundamentos de construcción del SWEBOK. **Clean Code es una fuente de heurísticas, no una norma ISO ni una obligación universal**: el presente documento convierte las heurísticas seleccionadas en acuerdos internos del equipo.

### Principios de aplicación

1. Las reglas se aplican al código nuevo y al código que se modifique. En el código heredado, los incumplimientos que no se corrijan durante esta práctica se registran como deuda técnica o tareas del tablero; no se justifica ampliar el alcance de la refactorización sin necesidad.
2. Ninguna refactorización debe cambiar el comportamiento observable ni la interfaz pública del módulo. El equipo ejecutará el mismo control de comportamiento antes y después de cada cambio.
3. Cada cambio de refactorización debe ser pequeño, estar asociado a una heurística o regla de este estándar y registrarse en un commit cuyo mensaje identifique el criterio aplicado.
4. Las métricas se obtienen con la misma herramienta y configuración antes y después. Si una herramienta no ofrece una medida, se deja el dato sin valor y se explica la limitación; no se inventan resultados.
5. El analizador estático y la revisión humana son complementarios. La herramienta ayuda a detectar problemas cuantificables; una persona debe revisar los aspectos de intención, responsabilidad, claridad y comportamiento que la herramienta no puede decidir.
6. Las excepciones a este estándar deben documentarse con el motivo, la ubicación y la persona que las acepta. No se permiten excepciones silenciosas.

---

## 2. Estándar de nombres: variables, funciones, clases y constantes

**Objetivo:** que cada identificador comunique qué representa o hace, sin obligar al lector a deducirlo a partir de comentarios o del contexto remoto.

| ID | Regla obligatoria del equipo | Fundamento / heurística | Quién verifica y cómo |
|---|---|---|---|
| NOM-01 | Los nombres de variables, parámetros, funciones, clases y constantes deben revelar su intención. Se evitarán identificadores vagos como `x`, `dato`, `proc`, `aux` o `flag`, salvo usos locales muy breves y evidentes. | **N1 — Choose Descriptive Names**, *Clean Code*, cap. 17, p. 309; y cap. 2, p. 18. Un nombre debe indicar por qué existe, qué hace o qué representa. Los nombres claros reducen las traducciones mentales al leer el código. | **Helber Junior Lope Apomayta** revisa los identificadores en el pull request y comprueba si puede explicar su propósito sin consultar comentarios adicionales. **Alex Jeanpier Chata Chino** realiza una segunda lectura de los nombres de las funciones. |
| NOM-02 | El nombre debe corresponder al nivel de abstracción de la entidad. Los nombres de alto nivel expresarán conceptos del negocio o del dominio y no detalles accidentales de implementación. Los nombres técnicos se usarán cuando la entidad sea realmente técnica. | **N2 — Choose Names at the Appropriate Level of Abstraction**, *Clean Code*, cap. 17, p. 311. Evita acoplar el vocabulario del código a detalles de implementación que pueden cambiar. | **Helber Junior Lope Apomayta** revisa clases, módulos e interfaces y contrasta sus nombres con la responsabilidad que exponen. |
| NOM-03 | Se utilizará un vocabulario compartido y consistente con el dominio del proyecto. Cuando exista un término estándar del negocio, del lenguaje o de un patrón de diseño, el equipo preferirá ese término y evitará inventar sinónimos para el mismo concepto. | **N3 — Use Standard Nomenclature Where Possible**, *Clean Code*, cap. 17, p. 311. El vocabulario reconocido permite aprovechar el conocimiento previo de los lectores y mantiene un lenguaje común entre integrantes. | **Helber Junior Lope Apomayta** comprueba la consistencia de los términos y mantiene una lista breve de términos del dominio cuando existan sinónimos conflictivos. |
| NOM-04 | Los nombres deben ser inequívocos. No se usarán nombres iguales o casi iguales para conceptos distintos, ni abreviaturas que puedan interpretarse de varias maneras. Las diferencias relevantes entre funciones o variables deben reflejarse en sus nombres. | **N4 — Unambiguous Names**, *Clean Code*, cap. 17, p. 312. Los nombres ambiguos dificultan distinguir comportamientos similares y pueden provocar errores durante el mantenimiento. | **Helber Junior Lope Apomayta** verifica nombres similares dentro del módulo; **Alex Jeanpier Chata Chino** comprueba que el nombre de cada función corresponda con su resultado y efectos. |
| NOM-05 | La longitud del nombre será proporcional al alcance: se permiten nombres breves como `i` o `j` en bucles pequeños y locales; las variables visibles durante una función extensa o en un ámbito amplio deben tener nombres descriptivos. | **N5 — Use Long Names for Long Scopes**, *Clean Code*, cap. 17, p. 312. Un nombre corto pierde significado cuando se utiliza lejos de su declaración. | **Helber Junior Lope Apomayta** inspecciona los identificadores de alcance amplio y los nombres de una sola letra fuera de bucles breves. |
| NOM-06 | No se añadirán prefijos que repitan el tipo, el ámbito o la categoría del identificador (por ejemplo, `m_`, notación húngara o `I` para interfaces), salvo que una convención oficial del lenguaje, framework o API utilizada lo exija. | **N6 — Avoid Encodings**, *Clean Code*, cap. 17, p. 312. Los prefijos redundantes agregan ruido y duplican información que normalmente ya proporciona el lenguaje o el IDE. | **Helber Junior Lope Apomayta** revisa prefijos y convenciones. Cualquier excepción debe quedar indicada en el estándar o en la guía técnica del proyecto. |
| NOM-07 | El nombre de una función debe hacer visible su acción principal y no ocultar efectos secundarios importantes. Verbos como `consultar`, `guardar`, `enviar`, `eliminar` o `actualizar` se elegirán de acuerdo con lo que realmente ocurre. | **N7 — Names Should Describe Side-Effects**, *Clean Code*, cap. 17, p. 313. Ocultar modificaciones de estado, escrituras o comunicaciones en un nombre que promete solo consultar puede crear acoplamientos y sorpresas para quien llama a la función. | **Alex Jeanpier Chata Chino** compara el nombre de la función con todas sus operaciones y efectos observables; **Helber Junior Lope Apomayta** verifica que el nombre sea claro. |
| NOM-08 | Cada categoría de identificador seguirá una única convención de escritura compatible con el lenguaje del proyecto (por ejemplo, `snake_case` o `camelCase` para variables y funciones; convención de clases y constantes del lenguaje). No se mezclarán estilos dentro del mismo módulo. | **N3 — Use Standard Nomenclature Where Possible** y **G24 — Follow Standard Conventions**, *Clean Code*, cap. 17, pp. 299 y 311. La consistencia evita que cada integrante introduzca un estilo propio. | **Helber Junior Lope Apomayta** define y revisa la convención; el formateador o linter se configura cuando la herramienta del lenguaje permita verificarla. |

**Criterio de aceptación:** una persona que no escribió el código debe poder inferir qué representa cada identificador y qué promete cada función sin depender de explicaciones verbales del autor.

---

## 3. Estándar de funciones: tamaño, responsabilidades y parámetros

**Objetivo:** que las funciones sean fáciles de comprender, llamar, probar y modificar, evitando que mezclen tareas o requieran demasiada información para ser utilizadas.

| ID | Regla obligatoria del equipo | Fundamento / heurística | Quién verifica y cómo |
|---|---|---|---|
| FUN-01 | Una función tendrá una sola responsabilidad conceptual. Si contiene bloques que realizan tareas distintas y pueden describirse por separado, se evaluará extraer funciones con nombres descriptivos. | **G30 — Functions Should Do One Thing**, *Clean Code*, cap. 17, p. 302; también cap. 3, p. 35. Una función que hace una sola cosa es más sencilla de nombrar, comprender, probar y refactorizar. | **Alex Jeanpier Chata Chino** lee la función y comprueba si puede describir su propósito en una frase sin enumerar tareas independientes. **Elvis Ronald Arocutipa Quispe** hace la revisión cruzada. |
| FUN-02 | Las instrucciones de una función deben mantenerse, en lo posible, en un mismo nivel de abstracción. No se mezclarán en un mismo bloque reglas del negocio con detalles técnicos de bajo nivel cuando estos puedan encapsularse. | **G34 — Functions Should Descend Only One Level of Abstraction**, *Clean Code*, cap. 17, p. 304. Mezclar niveles de abstracción obliga al lector a cambiar continuamente entre el propósito general y los detalles de implementación. | **Alex Jeanpier Chata Chino** revisa la secuencia de instrucciones y señala mezclas de reglas de negocio con operaciones técnicas. |
| FUN-03 | Una función tendrá idealmente cero, uno o dos parámetros; se aceptan hasta tres. Cuatro o más requieren justificación escrita y, cuando corresponda, agrupar parámetros relacionados en un objeto o estructura de datos. | **F1 — Too Many Arguments**, *Clean Code*, cap. 17, p. 288; y cap. 3, p. 40. Muchos argumentos aumentan la carga de comprensión y hacen más difícil recordar las llamadas. | **Alex Jeanpier Chata Chino** cuenta los parámetros mediante el IDE o revisión del código. Los casos de cuatro o más deben quedar justificados en el pull request. |
| FUN-04 | Se evitarán parámetros de salida que se modifican para devolver información al llamador. Se preferirán valores de retorno explícitos o una operación coherente sobre el objeto responsable, de acuerdo con el diseño y las convenciones del lenguaje. | **F2 — Output Arguments**, *Clean Code*, cap. 17, p. 288. Los parámetros de salida son menos intuitivos porque el lector debe saber que un argumento se modifica además de entregarse como entrada. | **Alex Jeanpier Chata Chino** inspecciona parámetros mutables y verifica si su propósito de salida está explícito. Las excepciones exigidas por una API deben documentarse. |
| FUN-05 | No se pasarán argumentos booleanos para hacer que una misma función ejecute comportamientos distintos. Se preferirán funciones separadas con nombres explícitos, salvo que la bandera represente una opción real e inseparable del dominio y se justifique. | **F3 — Flag Arguments**, *Clean Code*, cap. 17, p. 288. Una bandera suele indicar que la función tiene más de una responsabilidad o flujo de ejecución. | **Alex Jeanpier Chata Chino** busca parámetros booleanos y revisa las ramas controladas por ellos. **Elvis Ronald Arocutipa Quispe** valida que una excepción tenga justificación comprensible. |
| FUN-06 | Se evitarán argumentos selectores (enum, entero u otro valor) cuyo único propósito sea elegir entre varios comportamientos internos de una función. Cuando los comportamientos sean responsabilidades diferenciadas, se evaluarán funciones u objetos separados. | **G15 — Selector Arguments**, *Clean Code*, cap. 17, p. 294. Un selector puede ocultar varias operaciones bajo una sola interfaz y aumentar la complejidad de quien llama. | **Alex Jeanpier Chata Chino** revisa parámetros que seleccionan modos u operaciones y comprueba si cada alternativa representa una tarea diferente. |
| FUN-07 | Se preferirá polimorfismo frente a cadenas repetidas de `if/else` o `switch/case` cuando estas seleccionen comportamientos diferentes según el tipo o variante de un objeto y el patrón resulte adecuado. No se sustituirán condicionales simples por jerarquías innecesarias. | **G23 — Prefer Polymorphism to If/Else or Switch/Case**, *Clean Code*, cap. 17, p. 299. El polimorfismo puede concentrar las variaciones de comportamiento y evitar replicar condicionales en varios puntos. | **Alex Jeanpier Chata Chino** identifica condicionales repetidos por tipo o variante y justifica si el polimorfismo simplifica realmente el diseño. |
| FUN-08 | El nombre de la función describirá la acción que realiza; se evitarán nombres genéricos como `procesar()`, `hacer()` o `ejecutar()` cuando no indiquen el resultado o propósito. | **N1 — Choose Descriptive Names** y **Use Descriptive Names**, *Clean Code*, caps. 2 y 3; **N7**, cap. 17, p. 313. El nombre debe permitir anticipar lo que la función hace, incluidos sus efectos relevantes. | **Alex Jeanpier Chata Chino** compara nombre y comportamiento; **Helber Junior Lope Apomayta** verifica la claridad del identificador. |
| FUN-09 | Las funciones deben mantenerse pequeñas y dividirse cuando la división mejore la claridad y respete una responsabilidad única. El equipo usará el umbral de líneas definido en la sección 7 como señal de revisión, no como motivo automático para fragmentar código sin sentido. | *Clean Code*, cap. 3, p. 34; **G30**, cap. 17, p. 302. El autor recomienda funciones pequeñas, pero reconoce que su recomendación de tamaño no está respaldada por una cifra universal de investigación. La guía de Semana 10 deja el umbral a decisión del equipo. | **Alex Jeanpier Chata Chino** mide la función y revisa si una división produciría responsabilidades claras. No se dividirá una función únicamente para cumplir un número. |

**Criterio de aceptación:** cada función tiene un propósito reconocible, nombre coherente, parámetros comprensibles y un nivel de abstracción razonablemente uniforme.

---

## 4. Estándar de comentarios

**Objetivo:** conservar comentarios que aporten contexto que el código no puede expresar con facilidad y retirar los que generan ruido, confusión o información falsa.

| ID | Regla obligatoria del equipo | Fundamento / heurística | Quién verifica y cómo |
|---|---|---|---|
| COM-01 | No se incluirán en comentarios historiales de cambios, fechas de modificación, nombres de autores, tickets ni metadatos que ya administra Git u otra herramienta del proyecto. | **C1 — Inappropriate Information**, *Clean Code*, cap. 17, p. 286. Estos datos pertenecen al control de versiones o al sistema de seguimiento, no al código fuente. | **Elvis Ronald Arocutipa Quispe** busca metadatos e historiales en los comentarios durante la revisión del archivo. |
| COM-02 | Todo comentario que contradiga el código o describa un comportamiento que ya cambió debe actualizarse o eliminarse en el mismo cambio que modifica ese comportamiento. | **C2 — Obsolete Comment**, *Clean Code*, cap. 17, p. 286. Un comentario obsoleto puede convertirse en información falsa y confundir más que ayudar. | **Elvis Ronald Arocutipa Quispe** compara cada comentario del código modificado con el comportamiento actual. |
| COM-03 | No se escribirán comentarios que repitan literalmente el nombre de una variable, la firma de una función o una instrucción que ya es evidente. Se mejorará el código antes de añadir un comentario que solo lo traduzca. | **C3 — Redundant Comment**, *Clean Code*, cap. 17, p. 286; cap. 4, p. 55. Los comentarios redundantes añaden ruido y pueden hacer que los lectores dejen de prestar atención a los comentarios útiles. | **Elvis Ronald Arocutipa Quispe** revisa si el comentario aporta información que no se obtiene leyendo el código. |
| COM-04 | Los comentarios que sí sean necesarios deben ser breves, precisos, gramaticalmente correctos y técnicamente coherentes. Se reservarán para explicar motivos, restricciones, advertencias o decisiones no evidentes, no para describir cada línea. | **C4 — Poorly Written Comment**, *Clean Code*, cap. 17, p. 287; cap. 4, pp. 54–55. Un comentario vago o incorrecto genera una segunda fuente de confusión. | **Elvis Ronald Arocutipa Quispe** revisa claridad, exactitud y vigencia; solicita corregir comentarios ambiguos. |
| COM-05 | No se mantendrán bloques de código ejecutable desactivados mediante comentarios. Si ya no se necesita el código, se elimina; si se necesita recuperar una versión anterior, se utiliza el historial de Git. | **C5 — Commented-Out Code**, *Clean Code*, cap. 17, p. 287. El código comentado se vuelve obsoleto y distrae al lector; el control de versiones conserva el historial. | **Elvis Ronald Arocutipa Quispe** busca bloques de instrucciones comentadas y confirma que no sean ejemplos o documentación que deban existir fuera del código productivo. |
| COM-06 | No se eliminarán comentarios útiles solo por reducir su cantidad. Se conservarán los que expliquen el porqué de una decisión, una restricción, una consecuencia peligrosa o una regla de negocio que no resulte evidente en el código. | *Clean Code*, cap. 4, pp. 54–56: el libro distingue comentarios útiles e inútiles y sostiene que los comentarios no compensan un código malo. | **Elvis Ronald Arocutipa Quispe** comprueba que el comentario conserve información no expresada por el código y que siga siendo exacto. |

**Criterio de aceptación:** cada comentario existente es correcto, vigente y aporta información que no se deduce fácilmente del código; no hay bloques de código productivo comentados ni historiales incrustados.

---

## 5. Estándar de formato, organización y legibilidad

**Objetivo:** mantener una presentación uniforme para que todos los integrantes puedan recorrer el código y localizar rápidamente las ideas principales y sus dependencias.

| ID | Regla obligatoria del equipo | Fundamento / heurística | Quién verifica y cómo |
|---|---|---|---|
| FOR-01 | Todo el equipo utilizará una única configuración de formato para el lenguaje del proyecto: sangría, espacios, saltos de línea, llaves o delimitadores, orden de imports y convenciones aplicables. La configuración se compartirá en el repositorio y se aplicará mediante un formateador automático cuando exista. | **G24 — Follow Standard Conventions**, *Clean Code*, cap. 17, p. 299; cap. 5, p. 90. El equipo debe acordar y respetar un único estilo; la automatización reduce discusiones subjetivas. | **Oscar Fabian Choque Palza** mantiene la configuración del formateador y la ejecuta sobre los archivos modificados. **Helber Junior Lope Apomayta** comprueba que el equipo adopte la misma convención. |
| FOR-02 | Los archivos se organizarán siguiendo la metáfora del periódico: primero se presentarán los conceptos y operaciones de mayor nivel; los detalles de implementación y funciones auxiliares aparecerán después, en un orden que permita seguir la lectura. | *Clean Code*, cap. 5, “The Newspaper Metaphor”, p. 77. El lector debe comprender primero el propósito general y después profundizar en los detalles. | **Oscar Fabian Choque Palza** revisa el orden de lectura del archivo y la cercanía de las funciones relacionadas. |
| FOR-03 | Las declaraciones locales se ubicarán cerca de su primer uso cuando el lenguaje lo permita. Las funciones que una operación utiliza de forma directa se mantendrán próximas y organizadas de manera que el flujo de lectura sea fácil de seguir. | **G10 — Vertical Separation**, *Clean Code*, cap. 17, p. 292. La cercanía vertical ayuda a seguir las dependencias sin desplazamientos innecesarios. | **Oscar Fabian Choque Palza** inspecciona la organización vertical del módulo durante la revisión manual. |
| FOR-04 | Las condiciones booleanas complejas se extraerán, cuando mejore su comprensión, a funciones o variables con nombres que expresen la condición. Se preferirán condiciones positivas y se evitarán negaciones dobles o innecesarias. | **G28 — Encapsulate Conditionals** y **G29 — Avoid Negative Conditionals**, *Clean Code*, cap. 17, pp. 301–302. Los nombres descriptivos y las condiciones positivas reducen el esfuerzo de interpretar la lógica. | **Oscar Fabian Choque Palza** identifica condiciones compuestas o negaciones difíciles de leer; **Alex Jeanpier Chata Chino** verifica que la extracción preserve exactamente la lógica. |
| FOR-05 | Los valores numéricos o literales cuyo significado no sea evidente se reemplazarán por constantes con nombres descriptivos. No se crearán constantes para valores universalmente evidentes si el nombre no añade claridad. | **G25 — Replace Magic Numbers with Named Constants**, *Clean Code*, cap. 17, p. 300. Una constante con nombre comunica la intención del valor y facilita su mantenimiento. | **Oscar Fabian Choque Palza** busca literales repetidos o no evidentes en el código modificado y comprueba que el nombre explique su significado. |

**Criterio de aceptación:** los archivos modificados siguen una configuración común, presentan primero las ideas principales y evitan condiciones o literales que obliguen a descifrar la intención.

---

## 6. Estándar de duplicación, código muerto y dependencias temporales

**Objetivo:** evitar que una misma regla de negocio tenga que mantenerse en varios lugares y retirar código que confunda o ya no forme parte del comportamiento del sistema.

| ID | Regla obligatoria del equipo | Fundamento / heurística | Quién verifica y cómo |
|---|---|---|---|
| DUP-01 | Se evitará mantener fragmentos duplicados que representen la misma regla o algoritmo. Cuando dos o más lugares implementen la misma responsabilidad, se evaluará extraer una función, reutilizar un componente o aplicar un patrón apropiado. No se unificarán fragmentos solo porque se parecen superficialmente si representan conceptos distintos. | **G5 — Duplication**, *Clean Code*, cap. 17, p. 289. Una regla duplicada debe cambiarse en varios lugares y puede quedar inconsistente. La abstracción debe conservar el significado del dominio. | **Alex Jeanpier Chata Chino** revisa los fragmentos detectados por el analizador y confirma manualmente si representan la misma responsabilidad. **Oscar Fabian Choque Palza** registra la medida de duplicación. |
| DUP-02 | Se eliminarán bloques inalcanzables y funciones que no tengan usos comprobables, después de revisar referencias, llamadas dinámicas, puntos de entrada y particularidades del framework. No se borrará código únicamente porque el analizador no detecte una llamada directa sin comprobar esos casos. | **G9 — Dead Code**, *Clean Code*, cap. 17, p. 292; **F4 — Dead Function**, cap. 17, p. 288. El código muerto se vuelve obsoleto y dificulta comprender qué partes del sistema participan realmente. | **Alex Jeanpier Chata Chino** verifica el flujo y las referencias antes de proponer la eliminación; **Elvis Ronald Arocutipa Quispe** revisa que la eliminación no suprima una ruta necesaria. |
| DUP-03 | Cuando varias operaciones deban ejecutarse en un orden específico, ese orden debe quedar expresado mediante el flujo de control, los parámetros, los valores de retorno o una interfaz que haga visible la dependencia. No se confiará en que quien llama conozca una secuencia oculta. | **G31 — Hidden Temporal Couplings**, *Clean Code*, cap. 17, p. 302. Hacer explícito el orden requerido evita llamadas fuera de secuencia y errores difíciles de reproducir. | **Alex Jeanpier Chata Chino** revisa funciones que requieren preparación previa o una secuencia fija y comprueba que la dependencia sea visible. |
| DUP-04 | Un módulo accederá directamente a los colaboradores que necesita, sin navegar por objetos intermedios para llegar a colaboradores de estos (por ejemplo, evitar cadenas como `pedido.cliente.direccion.ciudad` cuando el diseño permita una interfaz más directa). | **G36 — Avoid Transitive Navigation**, *Clean Code*, cap. 17, p. 306. La navegación transitiva aumenta el conocimiento que un módulo tiene sobre la estructura interna de otros módulos y favorece el acoplamiento. | **Alex Jeanpier Chata Chino** revisa cadenas de acceso entre objetos y comprueba si el módulo depende de detalles internos de colaboradores indirectos. |

**Criterio de aceptación:** no se dejan duplicaciones conocidas de una misma regla sin registrar; el código muerto eliminado fue comprobado y el orden obligatorio entre operaciones resulta visible.

---

## 7. Umbrales y control de las cinco medidas

Los valores siguientes son **umbrales internos propuestos para este equipo**, no límites universales de SWEBOK, ISO/IEC 29110 ni de *Clean Code*. El SWEBOK fundamenta la minimización de complejidad y la aplicación de estándares; la guía de Semana 10 pide que cada equipo acuerde sus propios umbrales.

| Medida | Umbral acordado propuesto | Acción cuando se supera | Cómo se mide |
|---|---|---|---|
| Líneas por función | Objetivo: **30 líneas de código o menos** por función. | Si supera 30, se revisará si realiza más de una tarea o mezcla niveles de abstracción. Si se mantiene, se documentará la razón. No se dividirá una función artificialmente solo para cumplir el número. | Métrica de líneas reportada por la misma herramienta y con la misma definición antes y después. |
| Parámetros por función | **Máximo 3** parámetros. | Con 4 o más, se debe revisar si pueden agruparse datos relacionados o simplificarse la interfaz. Toda excepción requiere justificación en el pull request. | Conteo de parámetros en la firma de cada función. |
| Profundidad máxima de anidamiento | **Máximo 3 niveles**. | Con 4 o más niveles, se revisará la posibilidad de usar retornos tempranos, extraer condiciones o dividir responsabilidades, sin alterar la lógica. | Medida del analizador, utilizando siempre la misma definición de estructuras anidadas. |
| Complejidad ciclomática | **Máximo 10 por función**. | Entre 11 y 15: revisión obligatoria y justificación. Más de 15: se debe proponer una simplificación o registrar una excepción técnica aprobada por el equipo. | Complejidad reportada por el mismo analizador; se conserva la configuración de reglas. |
| Fragmentos duplicados | **Objetivo: 0 fragmentos duplicados de 5 o más líneas ejecutables** dentro del módulo. | Cada fragmento detectado se inspecciona para determinar si representa la misma responsabilidad. Si no se corrige, se registra como deuda técnica y se justifica. | Analizador de duplicación con el mismo umbral de detección antes y después; se documentan herramienta y configuración. |

### 7.1 Reglas obligatorias para medir

| ID | Regla del equipo | Fundamento | Quién verifica y cómo |
|---|---|---|---|
| UMB-01 | Se registrarán las cinco medidas antes y después de la refactorización, sobre las mismas funciones del módulo y con la misma herramienta y configuración. | SWEBOK, KA 4, § 1.1; Guía de referencia rápida de Semana 10, § 3. La comparación permite evaluar cambios con evidencia y evita conclusiones basadas solo en impresiones. | **Oscar Fabian Choque Palza** genera las mediciones; **Helber Junior Lope Apomayta** comprueba que las funciones y configuraciones comparadas sean las mismas. |
| UMB-02 | Los umbrales de la tabla son los criterios internos de revisión del equipo. Si la experiencia con el lenguaje o la herramienta demuestra que un umbral no es apropiado, se modifica mediante acuerdo documentado y se aplica de forma consistente; nunca se cambia retroactivamente solo para aparentar una mejora. | SWEBOK, KA 4, § 1.5; Guía de Semana 10, § 4. Una medida sin un umbral acordado es solo un dato; el estándar interno orienta la construcción. | **Oscar Fabian Choque Palza** conserva los umbrales y registra sus cambios; los cuatro integrantes acuerdan cualquier modificación. |
| UMB-03 | No se silenciará, desactivará ni suprimirá una advertencia del linter o analizador sin dejar una justificación escrita, indicando la regla, el motivo y el alcance de la supresión. Se preferirán excepciones puntuales a desactivaciones globales. | **G4 — Overridden Safeties**, *Clean Code*, cap. 17, p. 289; Guía de Semana 10, § 9. Silenciar advertencias sin razón oculta información necesaria para evaluar el código. | **Oscar Fabian Choque Palza** revisa el reporte del analizador y las supresiones; **Elvis Ronald Arocutipa Quispe** comprueba que la justificación sea comprensible y específica. |
| UMB-04 | La revisión automática no sustituye la revisión humana. Cada pull request tendrá revisión de otra persona que compruebe nombres, responsabilidades, comentarios, dependencias y posibles cambios de comportamiento. | Guía de Semana 10, §§ 8, 9 y 11; SWEBOK, KA 4, § 3.6. Un analizador puede medir propiedades estructurales, pero no juzga por sí solo si un nombre revela intención o si un comentario es engañoso. | **Elvis Ronald Arocutipa Quispe** coordina la revisión humana; cada pull request debe ser revisado por un integrante distinto de quien realizó el cambio. |
| UMB-05 | El mismo control de comportamiento se ejecutará y registrará antes y después de cada refactorización. Si el resultado observable cambia, el cambio no se acepta como refactor y debe deshacerse o registrarse como una tarea de desarrollo/corrección separada. | SWEBOK, KA 7, § 4.2; Guía de Semana 10, § 10. La refactorización reorganiza la estructura interna sin cambiar el comportamiento. | **Elvis Ronald Arocutipa Quispe** ejecuta o registra el control; **Alex Jeanpier Chata Chino** revisa que el cambio sea estructural y no funcional. |

### 7.2 Tratamiento del código heredado

Si una función ya supera un umbral antes de la Semana 10:

- Se registra su valor real en la línea base; no se altera el dato para ajustarlo al estándar.
- La refactorización de esta semana debe procurar mejorar las funciones seleccionadas sin ampliar innecesariamente el alcance.
- Si una función no se modifica, el incumplimiento puede quedar registrado como deuda técnica o elemento del tablero, con una explicación.
- No se acepta empeorar deliberadamente una medida en una función modificada sin justificación técnica.
- La comparación final se realiza con las mismas funciones y las mismas cinco medidas.

**Nota sobre disponibilidad de métricas:** si el analizador elegido no ofrece alguna de las cinco medidas, la celda correspondiente se deja vacía y se explica qué herramienta o limitación impidió obtenerla. No se inventan valores ni se reemplazan por estimaciones no declaradas.

---

## 8. Responsables de verificación

La asignación busca repartir la revisión entre las cuatro personas. La persona responsable de una sección realiza la primera verificación; la segunda persona indicada realiza una comprobación cruzada cuando la regla afecte código modificado en el pull request.

| Persona | Responsabilidad principal | Actividades de verificación |
|---|---|---|
| **Helber Junior Lope Apomayta** | Nombres y vocabulario del proyecto. | Revisa claridad, ambigüedad, alcance, convenciones, prefijos y consistencia del vocabulario. También comprueba que los nombres de funciones correspondan a sus efectos. |
| **Alex Jeanpier Chata Chino** | Funciones, parámetros, duplicación y código muerto. | Revisa responsabilidades, niveles de abstracción, cantidad y tipo de parámetros, condicionales repetidos, referencias y funciones sin uso. |
| **Elvis Ronald Arocutipa Quispe** | Comentarios, revisión humana y control de comportamiento. | Revisa vigencia y calidad de comentarios, participa como revisor de pull requests y comprueba que se conserve el comportamiento observable. |
| **Oscar Fabian Choque Palza** | Formato, herramientas, linter y métricas. | Mantiene la configuración de formato y análisis estático, genera las cinco medidas antes y después y comprueba las justificaciones de advertencias suprimidas. |

Ningún integrante debe aprobar por sí solo un cambio que haya realizado. Cuando una persona sea autora del cambio, otra persona verificará el cumplimiento de las reglas correspondientes.

---

## 9. Heurísticas adicionales recomendadas para complementar la guía de Semana 10

La guía de referencia rápida de Semana 10 selecciona doce heurísticas para la revisión del módulo: C3, F1, G5, G9, G10, G25, G28, G30, G31, G36, N1 y N5. La sección que se entregó como apoyo amplía esa selección. Para que el estándar del equipo cubra más situaciones relevantes, se recomienda añadir las siguientes heurísticas a la lista de consulta del equipo.

| Heurística adicional | Nombre en *Clean Code* | Por qué conviene incorporarla | Dónde queda aplicada en este estándar |
|---|---|---|---|
| N2 | Choose Names at the Appropriate Level of Abstraction | Evita que nombres conceptuales queden atados a detalles técnicos que podrían cambiar. | NOM-02 |
| N3 | Use Standard Nomenclature Where Possible | Mantiene un vocabulario compartido del dominio y de los patrones. | NOM-03 y NOM-08 |
| N4 | Unambiguous Names | Reduce confusiones entre identificadores y comportamientos similares. | NOM-04 |
| N6 | Avoid Encodings | Evita prefijos y notaciones que repiten información disponible en el lenguaje o IDE. | NOM-06 |
| N7 | Names Should Describe Side-Effects | Ayuda a que el nombre de una función no oculte escrituras, cambios de estado u otras operaciones. | NOM-07 y FUN-08 |
| F2 | Output Arguments | Evita parámetros cuyo propósito real sea devolver datos modificados de forma poco evidente. | FUN-04 |
| F3 | Flag Arguments | Reduce funciones que cambian de responsabilidad según un booleano. | FUN-05 |
| G15 | Selector Arguments | Hace visibles las operaciones diferentes que se ocultan detrás de un selector. | FUN-06 |
| G23 | Prefer Polymorphism to If/Else or Switch/Case | Ayuda cuando hay ramas repetidas que seleccionan comportamientos por tipo o variante. | FUN-07 |
| G34 | Functions Should Descend Only One Level of Abstraction | Evita mezclar reglas de negocio con detalles técnicos dentro de una función. | FUN-02 |
| C1 | Inappropriate Information | Evita incluir historiales y metadatos que deben estar en Git o en el sistema de seguimiento. | COM-01 |
| C2 | Obsolete Comment | Evita comentarios desactualizados que contradigan el comportamiento. | COM-02 |
| C4 | Poorly Written Comment | Mejora la precisión de los comentarios que sí son necesarios. | COM-04 |
| C5 | Commented-Out Code | Retira instrucciones comentadas que generan ruido y se vuelven obsoletas. | COM-05 |
| G24 | Follow Standard Conventions | Refuerza la adopción de una sola convención de formato para el equipo. | NOM-08 y FOR-01 |
| G29 | Avoid Negative Conditionals | Facilita la lectura de condiciones evitando negaciones difíciles de interpretar. | FOR-04 |
| F4 | Dead Function | Complementa G9 al prestar atención específica a funciones sin uso. | DUP-02 |
| G4 | Overridden Safeties | Desalienta desactivar advertencias o mecanismos de seguridad sin justificación. | UMB-03 |

### Heurísticas de la guía que se mantienen y deben seguir revisándose

Además de las adicionales anteriores, no deben perderse las heurísticas que ya están en la guía de Semana 10: **G5** (duplicación), **G9** (código muerto), **G10** (separación vertical), **G25** (números mágicos), **G28** (encapsular condicionales), **G30** (una sola cosa), **G31** (acoplamientos temporales ocultos), **G36** (evitar navegación transitiva), **N1** (nombres descriptivos), **N5** (nombres largos para alcances largos), **F1** (demasiados argumentos) y **C3** (comentarios redundantes).

**Recomendación de alcance:** estas heurísticas adicionales se incorporan al estándar para orientar el desarrollo y las revisiones. No significa que el equipo deba forzar la aplicación de todas en el módulo base durante la Semana 10. Solo se aplica una heurística cuando el código presenta realmente el problema y el cambio puede hacerse sin alterar el comportamiento.

---

## 10. Evidencias para comprobar que el estándar se cumple

Para que el estándar no quede como una declaración sin verificación, el equipo conservará estas evidencias:

1. Este documento en el repositorio o carpeta de entregables.
2. Configuración del formateador y del linter, cuando el lenguaje disponga de esas herramientas.
3. Línea base inicial y final con las cinco medidas y la identificación de las funciones medidas.
4. Commits pequeños con el código de la heurística en el mensaje.
5. Resultado del mismo control de comportamiento antes y después.
6. Pull request con revisión de otro integrante y las justificaciones de las excepciones.
7. Registro de deuda técnica para los incumplimientos heredados que no se aborden en esta práctica.

## 11. Referencias bibliográficas

- Flores, J., & Vazquez, A. (2012). *Deployment package: Construction, Basic profile* (versión 0.5). UNAM. En especial, secciones 4, 6.1 y 7.5.
- IEEE Computer Society. (2024). *Guide to the Software Engineering Body of Knowledge (SWEBOK Guide)* (versión 4.0, H. Washizaki, Ed.). IEEE Computer Society. En especial, KA 4, §§ 1.1, 1.5 y 3.6; KA 7, § 4.2.
- Martin, R. C. (2008). *Clean Code: A Handbook of Agile Software Craftsmanship*. Prentice Hall. En especial, capítulos 2, 3, 4, 5 y 17; las heurísticas se citan por código, nombre y página en las tablas de este estándar.
- Universidad Nacional Jorge Basadre Grohmann. (2026). *Guía de referencia rápida: fundamentos de la construcción y Clean Code sobre el esqueleto heredado (Semana 10)*. Ingeniería de Software I (IS1-2026).
- Universidad Nacional Jorge Basadre Grohmann. (2026). *Del hallazgo al cambio: estándar de construcción y módulo base refactorizado*. Kit de Laboratorio, Ingeniería de Software I (IS1-2026), Semana 10.
- Universidad Nacional Jorge Basadre Grohmann. (2026). *Sílabo de Ingeniería de Software I (IS1), 2026-II*.

---

## 12. Acuerdo de adopción del equipo

Los cuatro integrantes declaran que han leído este estándar, entienden las reglas y aplicarán sus criterios al código nuevo y al código que modifiquen. Los umbrales son acuerdos internos propuestos para el proyecto y podrán cambiarse únicamente mediante acuerdo documentado del equipo.

| Integrante | Confirmación de lectura y acuerdo |
|---|---|
| Helber Junior Lope Apomayta | ______________________________ |
| Alex Jeanpier Chata Chino | ______________________________ |
| Elvis Ronald Arocutipa Quispe | ______________________________ |
| Oscar Fabian Choque Palza | ______________________________ |

**Fecha de adopción:** 03 / 11 / 2026
