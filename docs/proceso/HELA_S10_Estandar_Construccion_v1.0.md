# HELA — Estándar de construcción de código (S10)

**Equipo Nexo · Ingeniería de Software I · 2026-II**  
**Versión:** 1.0 (corrección de referencias de heurísticas, sin cambios de umbrales) · **Estado:** Umbrales aprobados por el equipo (confirmación: 03/11/2026)
**Ámbito:** Código JavaScript de HELA, especialmente funciones nuevas o modificadas.

## Reglas de construcción

1. **Nombres (N1, N5).** Mantener el español y nombres descriptivos. Usar `camelCase` en variables y funciones; `PascalCase` en clases; `MAYUSCULAS_CON_GUION_BAJO` en constantes globales. Nombrar funciones con verbo + objeto (`validarPedido`) e identificadores `<entidad>Id`. Respetar literalmente los nombres del contrato OpenAPI.
2. **Funciones (G30, G28, F1).** Una responsabilidad identificable por función. Extraer operaciones cuando mejoren la lectura, preferir condiciones expresivas y salidas tempranas cuando reduzcan anidamiento. No crear abstracciones innecesarias ni alterar reglas, respuestas o errores durante una refactorización.
3. **Constantes (G25), comentarios (C3) y código muerto (G9).** Sustituir números mágicos vinculados a reglas por constantes descriptivas. Comentar decisiones, restricciones y razones no evidentes; evitar comentarios que repiten el código. Eliminar código muerto, depuración innecesaria y bloques comentados sin justificación. Registrar reglas inciertas como deuda.
4. **Formato y separación vertical (reglas del equipo; G10).** Dos espacios, comillas simples, punto y coma, llaves de apertura en la misma línea y UTF-8. Mantener las declaraciones próximas a su uso (G10). Aplicar Prettier y ESLint cuando su configuración y comandos estén disponibles; no declarar controles no ejecutados.
5. **Duplicación (G5).** Reutilizar código repetido solo cuando una extracción mantenga responsabilidades claras. Revisar coincidencias textuales y similitudes lógicas; un 0 % medido no significa ausencia absoluta de duplicación.

**Verificación de reglas cualitativas:** el revisor comprobará nombres (N1/N5), responsabilidad y condiciones (G30/G28), declaraciones próximas a su uso (G10), comentarios y código muerto (C3/G9), y constantes significativas (G25). Para duplicación (G5) se utilizarán jscpd y lectura de código; el formato se revisará con la configuración del equipo y, cuando estén disponibles, Prettier/ESLint.

## Umbrales aprobados y verificación

| Métrica | Límite | Método para S10 |
|---|---:|---|
| Líneas por función | ≤ 25 | Analizador AST |
| Parámetros por función | ≤ 3 | Analizador AST |
| Anidamiento máximo | ≤ 2 | Analizador AST |
| Complejidad ciclomática por función | ≤ 10 | Analizador AST, con criterio declarado |
| Líneas duplicadas | ≤ 3 % | jscpd, configuración constante |

**Medición S10:** analizar el mismo alcance antes/después. Para `carta-qr`, usar `analizar-s10.cjs` y jscpd 5.4.2 (JavaScript, modo `weak`, mínimo 20 tokens y 3 líneas). Registrar versiones, archivos examinados, resultados y limitaciones. Si una función excede un umbral, justificarlo y registrar la acción acordada.

## Control de calidad y trazabilidad

Ejecutar pruebas antes de modificar y después de cada cambio; registrar los resultados reales. Hacer commits pequeños y verificar `git diff --check`. Repetir las cinco métricas al finalizar; los escenarios probados no garantizan equivalencia absoluta. Aplicar la lista CR1–CR16 y las heurísticas de la guía docente en la revisión cruzada, con evidencia y respuesta a cada hallazgo.

Respetar el flujo aprobado: ramas `<tipo>/s<semana>-<descripcion>`, commits `<tipo>: <descripcion>`, Pull Request hacia `develop` y revisión antes de integrar; sin `push` directo a `develop` ni `main`. Vincular la tarea de Sprint 2 y su Definition of Done.

**Precedencia y fuentes:** complementa `docs/proceso/HELA_Guia_Desarrollo_y_Contribucion_v1.0.md` y la guía de práctica S10; no sustituye la Especificación del Sistema, el SAD ni OpenAPI vigentes.
