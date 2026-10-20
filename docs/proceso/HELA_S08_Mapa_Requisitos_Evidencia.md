# HELA — Semana 08: mapa inicial de requisitos y evidencia

**Equipo:** Nexo  
**Curso:** Ingeniería de Software I, 2026-II  
**Fecha de corte:** 20 de octubre de 2026  
**Repositorio:** `Alex-Jeanpier-Chata/is-2026-nexo`  
**Rama base:** `develop`  
**Commit base:** `803de71f4077abbea9132650850f3cdde57c8320`

## 1. Propósito

Este mapa identifica el destino y el estado inicial de las evidencias necesarias para consolidar el Producto 1. No reemplaza el informe de auditoría ni asigna estados a los resultados de ISO/IEC 29110 sin el registro auténtico del equipo auditor.

## 2. Fuentes vigentes

| Fuente | Uso en el cierre |
|---|---|
| Sílabo de Ingeniería de Software I 2026-II | Define el Producto 1: ciclo de vida, auditoría ISO/IEC 29110 y dashboard S1–S8. |
| Guía y laboratorio S08 | Definen el índice del expediente, los catorce resultados, las cinco condiciones de entrada y los límites de las afirmaciones. |
| ISO/IEC 29110-5-1-2:2025 | Fuente normativa para los resultados PM.O1–PM.O7 y SI.O1–SI.O7. |
| Repositorio y GitHub Projects de HELA | Fuente técnica para commits, PR, Issues, ramas, etiquetas y estado del tablero. |
| Entregables del Equipo Nexo | Fuente documental de las semanas anteriores. |

## 3. Mapa requisito–evidencia

| Requisito del cierre | Evidencia localizada | Estado inicial | Acción necesaria |
|---|---|---|---|
| Marco de proceso y ciclo de vida | Entregables S02 y paquete técnico adoptado | Localizada | Integrar una síntesis con enlaces fechados. |
| Acuerdos, DoD y DoR | `docs/proceso/HELA_Paquete_Acuerdos_Equipo_Nexo_S03_v1.0.docx` y `HELA_Guia_Desarrollo_y_Contribucion_v1.0.md` | Localizada | Conservar criterios originales y relacionarlos con las mejoras. |
| Dashboard S1–S8 | `scripts/metricas-dora.js`, `panel-metricas/metricas_raw.json` y `panel-metricas/README.md` | Solo captura S04 | Preservar S04 y ejecutar una captura S08 con la misma fórmula y ventana de 21 días. |
| Sprint 1: velocidad, burndown y deuda técnica | Documentos S06 y S07 integrados mediante PR #26, #35 y #36 | Localizada con límites declarados | Mantener las limitaciones de reconstrucción histórica y acreditación DoD. |
| Gobernanza y mejora | Issues #28–#34 y `HELA_S07_Plan_Mejora_Proceso.md` | Localizada | Verificar AM-01 y AM-03; mantener AM-02 para S10–S11. |
| Auditoría ISO/IEC 29110 | Material oficial S08 | Registro de auditoría recibida no localizado | No asignar estados ni firmas hasta obtener evidencia auténtica. |
| Trazabilidad y correcciones | Entregables S01–S07 y su historial | Parcialmente localizada | Construir la tabla semana–pieza–ubicación–fecha–corrección–destino. |
| Semana 05 | Material S08 declara que no fue dictada | Localizada | Registrar “Semana 05 no dictada”. |
| Contribución individual | Historial de commits, PR, Issues y archivos | Localizada para análisis | Atribuir únicamente contribuciones respaldadas por registros. |
| Expediente consolidado | No existe una versión final localizada | Pendiente | Integrar el documento con el índice canónico S08. |
| Etiqueta final | No existe `v0.8.0-expediente-proceso` | Pendiente | Crear únicamente sobre el commit final verificado y con aprobación. |
| Rúbrica específica de defensa S09 | No localizada | Pendiente | Solicitarla o localizarla antes de preparar la defensa final. |

## 4. Estado técnico inicial

- `develop` es la rama de integración vigente y está protegida.
- `main` está protegida y permanece en el cierre de S02; no es la base de trabajo S08.
- La rama de trabajo para el cierre es `docs/s08-expediente-proceso`.
- Los documentos S07 están integrados en `develop` mediante el PR #35.
- La corrección documental S06 está integrada mediante el PR #36.
- No existe todavía `docs/proceso/auditoria-29110/README.md`.
- No existe todavía la etiqueta `v0.8.0-expediente-proceso`.

## 5. Límites del cierre

- La auditoría no permite afirmar conformidad, certificación, nivel de madurez, nivel de capacidad ni porcentaje de conformidad.
- La atribución de un artefacto HELA a un producto de trabajo de la norma se registra como hipótesis del equipo.
- La función de aptitud permanece declarada y no ejecutada.
- Frecuencia de despliegue, tasa de fallos de cambios y tiempo de restauración permanecen pendientes hasta disponer de evidencia de producción.
- AM-02 corresponde al Sprint 2, semanas 10–11, y no se presenta como ejecutada en S08.
