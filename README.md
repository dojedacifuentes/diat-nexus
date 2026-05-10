# DIAT Nexus 2026

Plataforma web estática e interactiva sobre **Derecho, Inteligencia Artificial y Gobernanza Algorítmica**, basada en el documento académico del Programa DIAT - Facultad de Derecho PUCV y actualizada con referencias regulatorias vigentes a mayo de 2026.

## 1. Cómo instalar

```bash
npm install
```

## 2. Cómo correr localmente

```bash
npm run dev
```

Luego abre:

```bash
http://localhost:3000
```

## 3. Cómo subir a GitHub

```bash
git init
git add .
git commit -m "Create DIAT Nexus 2026"
git branch -M main
git remote add origin https://github.com/tu-usuario/diat-nexus-2026.git
git push -u origin main
```

## 4. Cómo desplegar en Vercel

1. Entra a https://vercel.com.
2. Crea un nuevo proyecto.
3. Importa el repositorio desde GitHub.
4. Vercel detectará Next.js automáticamente.
5. Usa estos comandos:

```bash
Build Command: npm run build
Install Command: npm install
Output Directory: out
```

El proyecto usa `output: "export"` en `next.config.js`, por lo que genera una versión estática en la carpeta `out`.

## 5. Qué secciones contiene

- Hero principal con métricas y animación de red neuronal.
- Capa institucional DIAT PUCV.
- Atlas de 20 módulos de aprendizaje.
- Knowledge graph interactivo sobre IA y Derecho.
- Rutas por perfil: estudiante, litigante, docente, investigador, institución pública y empresa.
- Modo "Explícame como humano".
- Repositorio de prompts y guía práctica de herramientas IA para usos jurídicos.
- Laboratorio práctico con simuladores de sesgo, riesgo regulatorio y prompting jurídico.
- Casos del futuro con respuesta modelo.
- Mapa regulatorio global.
- Timeline histórico de IA.
- Badges académicos y checklist local.
- Sonido sutil de interfaz con control para activar o desactivar.
- Kit práctico copiable.
- Carpeta de descargables en `public/descargas`.
- Cierre con tesis institucional.

## 6. Cómo editar el contenido

Todo el contenido pedagógico está en:

```bash
data/modules.js
```

Puedes editar:

- `modules`: módulos académicos.
- `knowledgeNodes`: nodos del mapa de conocimiento.
- `learningPaths`: rutas por perfil.
- `humanConcepts`: explicaciones simples.
- `futureCases`: dilemas jurídicos.
- `regulatoryMap`: mapa regulatorio.
- `timeline`: línea de tiempo.
- `toolkitItems`: checklists y matrices.
- `sourceLinks`: fuentes normativas.

Después de editar, ejecuta:

```bash
npm run build
```

## Estructura de carpetas

```text
diat-nexus-2026/
  app/
    globals.css
    layout.jsx
    page.jsx
  components/
    BadgeBoard.jsx
    DownloadCenter.jsx
    FinalThesis.jsx
    FutureCases.jsx
    Hero.jsx
    HumanMode.jsx
    InstitutionalStrip.jsx
    KnowledgeGraph.jsx
    LearningPaths.jsx
    ModuleAtlas.jsx
    Navbar.jsx
    PracticalLab.jsx
    PromptRepository.jsx
    RegulatoryMap.jsx
    Section.jsx
    Timeline.jsx
    Toolkit.jsx
  data/
    modules.js
  public/
    descargas/
      README_DESCARGAS.md
      guia-herramientas-ia-juridica.md
      kit-practico-diat-nexus.md
      matriz-riesgo-institucional.csv
      matriz-tarea-herramienta-riesgo-control.csv
      politica-gobernanza-ia-template.md
      protocolo-verificacion-respuestas-ia.md
      repositorio-prompts-juridicos.md
  .gitignore
  jsconfig.json
  next.config.js
  package-lock.json
  package.json
  postcss.config.js
  tailwind.config.js
  README.md
```
