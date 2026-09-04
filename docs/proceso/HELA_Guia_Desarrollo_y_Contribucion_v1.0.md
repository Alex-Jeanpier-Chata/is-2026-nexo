# HELA — Guía de Desarrollo y Contribución

**Sistema web de gestión para restaurantes**  
**Equipo Nexo — Ingeniería de Software I — 2026-II**  
**Versión 1.0**

---

## 1. Propósito

Esta guía establece las convenciones técnicas y de contribución utilizadas por el Equipo Nexo para el desarrollo de HELA. Su finalidad es mantener una base de código uniforme, comprensible y trazable, facilitando que los integrantes puedan desarrollar, revisar e integrar cambios bajo criterios comunes.

La guía complementa los artefactos oficiales del proyecto y no los reemplaza.

| Artefacto | Responsabilidad |
|---|---|
| Especificación del Sistema | Comportamiento funcional y reglas del negocio |
| SAD | Arquitectura, tecnologías y organización técnica |
| OpenAPI | Contrato HTTP de la API |
| Guía de Desarrollo y Contribución | Convenciones prácticas de implementación y trabajo |

Ante una discrepancia, debe consultarse primero el artefacto responsable de la decisión correspondiente.

---

## 2. Tecnologías adoptadas

La implementación respeta la línea base tecnológica definida en el SAD vigente.

| Área | Tecnología |
|---|---|
| Frontend | HTML5, CSS3 y JavaScript Vanilla |
| Comunicación frontend-backend | Fetch API sobre HTTP/JSON |
| Backend | Node.js |
| Framework backend | Express.js |
| Base de datos | MySQL |
| Acceso a datos | `mysql2` o driver compatible |
| Interfaz de servicios | API REST |
| Contrato | OpenAPI 3.0.3 |
| Arquitectura | Monolito modular |
| Entorno inicial | Ejecución local en `localhost:3000` |
| Formato automático | Prettier |
| Análisis estático | ESLint |

Las versiones concretas de Node.js, npm, MySQL, ESLint y Prettier se fijarán mediante los archivos de configuración del proyecto cuando corresponda.

---

## 3. Principios de desarrollo

- Mantener el código simple y legible.
- Utilizar español siempre que no contradiga una tecnología, librería o contrato existente.
- Preferir nombres breves, claros y comprensibles.
- Mantener módulos, archivos y funciones con responsabilidades identificables.
- No implementar rutas, parámetros ni estructuras HTTP fuera del contrato OpenAPI vigente.
- Mantener trazabilidad entre cambios, tareas, issues y Pull Requests.
- No convertir una ausencia de especificación en una regla de negocio inventada.
- No crear archivos, capas o abstracciones sin una responsabilidad concreta.
- No crear archivos vacíos únicamente para repetir una plantilla.

---

## 4. Convenciones de nombres

### 4.1 Idioma

Los identificadores propios del proyecto se expresan principalmente en español.

Se conservan en inglés los nombres propios de tecnologías, librerías, funciones externas y elementos cuyo cambio dificulte su reconocimiento.

```js
const pedido = await crearPedido(datos);
const conexion = await mysql.createConnection(configuracion);
```

### 4.2 Variables

Las variables utilizan `camelCase`.

Se prefieren nombres breves y suficientemente descriptivos.

Correcto:

```js
const producto = {};
const productoId = 12;
const pedido = {};
const pedidoTemp = {};
const codigoQr = 'ABC123';
const total = 40.5;
```

Evitar:

```js
const p = {};
const prodX = {};
const identificadorUnicoDelProductoSeleccionado = 12;
const nombreDelProductoQueSeEstaProcesando = 'Café';
```

La brevedad no debe eliminar el significado.

### 4.3 Identificadores

Para identificadores se utiliza el patrón:

```text
<entidad>Id
```

Ejemplos:

```js
productoId
pedidoId
mesaId
usuarioId
sucursalId
```

Se evita mezclar formatos como:

```text
productoID
ID_producto
id_producto
```

### 4.4 Funciones

Las funciones utilizan un verbo seguido del objeto o acción principal.

```js
crearPedido()
buscarProducto()
validarQr()
calcularTotal()
listarPedidos()
actualizarUsuario()
```

Se evitan nombres ambiguos como:

```js
procesar()
hacer()
ejecutarCosa()
manejarDatos()
```

### 4.5 Booleanos

Los valores booleanos deben expresar claramente un estado o condición.

```js
activo
valido
disponible
confirmado
pagado
```

### 4.6 Clases y componentes

Cuando corresponda utilizar clases, sus nombres emplean `PascalCase`.

```js
PedidoServicio
PedidoRepositorio
PedidoControlador
```

### 4.7 Constantes

Las constantes globales o valores de configuración inmutables utilizan mayúsculas y guion bajo.

```js
ESTADO_PENDIENTE
ESTADO_EXPIRADO
LIMITE_ITEMS
```

### 4.8 Nombres definidos por OpenAPI

Los nombres que forman parte del contrato HTTP se conservan exactamente.

Si el contrato declara:

```text
codigoQr
mesaId
venceEn
items
```

la interfaz HTTP utiliza esos mismos nombres.

No se reemplazan arbitrariamente por:

```text
qr
idMesa
fechaVencimiento
productos
```

---

## 5. Organización del código

La estructura general sigue el SAD de HELA.

```text
src/
├── frontend/
│   ├── paginas/
│   ├── estilos/
│   ├── scripts/
│   ├── componentes/
│   ├── modulos/
│   └── imagenes/
│
└── backend/
    ├── servidor.js
    ├── configuracion/
    ├── base-datos/
    │   └── conexion.js
    └── modulos/
```

### 5.1 Módulos backend

Cada módulo puede utilizar la siguiente estructura:

```text
modulo/
├── rutas.js
├── controlador.js
├── servicio.js
└── repositorio.js
```

| Archivo | Responsabilidad |
|---|---|
| `rutas.js` | Declara rutas Express y las relaciona con el controlador |
| `controlador.js` | Recibe la petición HTTP y genera la respuesta contractual |
| `servicio.js` | Aplica reglas del negocio y coordina la operación |
| `repositorio.js` | Consulta o modifica la persistencia |

No es obligatorio crear los cuatro archivos cuando un módulo todavía no necesita todas esas responsabilidades.

---

## 6. Estilo de JavaScript

| Elemento | Convención |
|---|---|
| Indentación | 2 espacios |
| Comillas | Simples |
| Punto y coma | Sí |
| Variables y funciones | `camelCase` |
| Clases | `PascalCase` |
| Constantes | `MAYUSCULAS_CON_GUION_BAJO` |
| Apertura de llaves | En la misma línea |
| Codificación | UTF-8 |

Ejemplo:

```js
function validarPedido(pedido) {
  if (!pedido) {
    throw new Error('Pedido inválido');
  }

  return true;
}
```

El formato automático será responsabilidad de Prettier.

Las verificaciones estáticas serán realizadas mediante ESLint.

Cuando exista una configuración automática, esta tendrá prioridad frente al formato manual.

---

## 7. Comentarios en el código

Los comentarios se utilizan únicamente cuando aportan información que no resulta evidente mediante la lectura normal del código.

Son adecuados para documentar:

- una decisión técnica relevante;
- una restricción funcional;
- un comportamiento provisional;
- una razón que explique por qué una solución se implementa de determinada manera.

Ejemplo válido:

```js
// La vigencia permanece configurable hasta resolver la deuda funcional.
const venceEn = calcularVencimiento();
```

También:

```js
// Se mantiene la operación local aunque falle el servicio externo.
await guardarDocumento(documento);
```

Se evita comentar operaciones evidentes:

```js
// Crear pedido.
const pedido = crearPedido();
```

No se utilizan emojis, arte ASCII, separadores visuales innecesarios ni comentarios decorativos.

**Criterio general:** el código expresa qué hace; el comentario explica por qué cuando sea necesario.

---

## 8. Git y trazabilidad

### 8.1 Ramas principales

`develop` constituye la rama de integración del trabajo del Equipo Nexo.

`main` mantiene el estado estable del producto.

No se realizan cambios ni `push` directos sobre `develop` o `main`.

### 8.2 Convención de ramas

Las ramas de trabajo utilizan:

```text
<tipo>/s<semana>-<descripcion>
```

Ejemplos:

```text
feat/s02-pedido-temporal
fix/s02-validacion-qr
docs/s02-openapi
refactor/s03-pedidos
chore/s02-configuracion-git
```

La descripción debe ser corta, legible y relacionada con el cambio realizado.

### 8.3 Convención de commits

Los commits utilizan:

```text
<tipo>: <descripcion>
```

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de error |
| `docs` | Documentación |
| `style` | Formato sin modificación lógica |
| `refactor` | Reestructuración sin cambio funcional |
| `test` | Pruebas |
| `chore` | Configuración o mantenimiento |

Ejemplos:

```text
feat: implementa pedido temporal qr
test: agrega prueba de integracion de pedido temporal
fix: corrige validacion de codigo qr
docs: actualiza guia de desarrollo
```

### 8.4 Flujo de contribución

```text
Actualizar develop local
        ↓
Crear rama propia
        ↓
Desarrollar localmente
        ↓
Ejecutar formato, lint y pruebas
        ↓
Crear commits
        ↓
Publicar la rama
        ↓
Abrir Pull Request hacia develop
        ↓
Revisión por otro integrante
        ↓
Corregir observaciones
        ↓
Integrar el cambio
```

Todo cambio debe pasar por Pull Request antes de incorporarse a `develop`.

---

## 9. Contrato OpenAPI

El contrato OpenAPI vigente constituye la fuente de verdad de la interfaz HTTP de HELA.

Antes de implementar un endpoint se debe verificar:

| Elemento | Verificación |
|---|---|
| Verbo HTTP | Debe coincidir |
| Ruta | Debe coincidir |
| Parámetros | Nombre, ubicación y obligatoriedad |
| Request | Estructura JSON |
| Response | Estructura JSON |
| Código HTTP | Debe estar declarado |
| Seguridad | Debe coincidir con el contrato |
| Caso de uso | Revisar `x-hela-cu` cuando corresponda |

No se agregan rutas, parámetros o propiedades únicamente porque resulten convenientes para la implementación.

Si existe información insuficiente para decidir una regla, se registra una deuda de especificación antes de modificar el contrato.

Los cambios al OpenAPI deben ser revisados por quien desempeña la Custodia del contrato OpenAPI.

---

## 10. Pruebas

Las pruebas forman parte de la implementación y no se consideran una actividad posterior independiente.

Para una rebanada vertical debe comprobarse al menos el recorrido:

```text
Petición HTTP real
        ↓
Ruta
        ↓
Controlador
        ↓
Servicio
        ↓
Repositorio
        ↓
Persistencia
        ↓
Respuesta HTTP
```

Cuando corresponda deben comprobarse además:

- código HTTP esperado;
- estructura de respuesta JSON;
- reglas del negocio;
- errores esperados;
- persistencia de la operación.

---

## 11. Definition of Done

Un cambio se considera terminado cuando cumple los criterios que correspondan a su naturaleza.

Para cambios de implementación:

```text
[ ] El código ejecuta correctamente en el entorno local.
[ ] Respeta la Especificación del Sistema.
[ ] Respeta el SAD.
[ ] Respeta OpenAPI cuando afecta la interfaz HTTP.
[ ] Mantiene las convenciones de esta guía.
[ ] Prettier no presenta cambios pendientes.
[ ] ESLint no presenta errores.
[ ] Las pruebas correspondientes son satisfactorias.
[ ] No contiene logs de depuración innecesarios.
[ ] No contiene código comentado sin justificación.
[ ] No contiene archivos temporales o basura.
[ ] Las decisiones no resueltas están registradas como deuda.
[ ] El cambio tiene commits identificables.
[ ] Existe Pull Request hacia develop.
[ ] El Pull Request fue revisado antes de integrarse.
```

---

## 12. Comandos de desarrollo

Cuando se inicialice el proyecto Node.js se mantendrá una interfaz simple mediante scripts de `npm`.

Se prevé disponer, como mínimo, de comandos equivalentes a:

```bash
npm run dev
npm run formato
npm run lint
npm test
```

La implementación exacta de estos scripts se define en `package.json`.

No se documentan como disponibles hasta que el proyecto haya sido configurado.

---

## 13. Regla de decisión

Ante una decisión dudosa se aplica el siguiente orden:

```text
¿Está definido funcionalmente?
        ↓
Especificación del Sistema

¿Es una decisión arquitectónica?
        ↓
SAD

¿Afecta HTTP?
        ↓
OpenAPI

¿Es una convención de implementación?
        ↓
CONTRIBUTING.md

¿Ninguno permite decidir?
        ↓
Registrar deuda de especificación
```

No se incorpora una regla permanente al producto únicamente para continuar una implementación.
