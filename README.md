# HOPE — Frontend (React + Vite)

Descripción breve
-
Frontend de la aplicación HOPE construido con React y Vite. Contiene los componentes, páginas y estilos usados por la aplicación pública.

Estructura principal
-
- `src/` — Código fuente React
	- `components/` — Componentes reutilizables (Header, Footer, Navigation, etc.)
	- `pages/` — Páginas (Home, Conocenos, Programas, Biblioteca, Llevaesperanza, Contactanos)
	- `assets/`, `images/`, `logos/`, `iconos/` — Recursos estáticos
	- `biblioteca-components/`, `programs-components/`, `conocenos-components/`, `llevaesperanza-components/` — carpetas de componentes por sección (se normalizaron nombres: sin espacios)
	- `biblioteca-styles/`, `conocenos-styles/`, `llevaesperanza-styles/` — estilos por sección (renombradas para evitar espacios)
	- `styles/` — estilos globales
- `public/` — Archivos estáticos que se copian tal cual
- `package.json`, `vite.config.js` — configuración y scripts

Requisitos
-
- Node.js 18+ recomendado
- npm (o yarn/pnpm) instalado

Instalación y arranque en desarrollo
-
1. Instalar dependencias:

```bash
npm install
```

2. Arrancar servidor de desarrollo (Vite):

```bash
npm run dev
```

Compilación para producción
-
```bash
npm run build

# Para previsualizar el build:
npm run preview
```

Notas importantes
-
- Se normalizaron nombres de carpetas que contenían espacios: por ejemplo `biblioteca components` → `biblioteca-components`, `Biblioteca Styles` → `biblioteca-styles`. Si copias/pegas código antiguo, actualiza imports.
- Los comandos anteriores asumen que trabajas desde la carpeta del proyecto `hope-frontend`.

Flujo de trabajo Git
-
- Rama principal: `main`
- Para cambios: crear rama feature/bugfix, hacer commits claros y abrir PR hacia `main`.

Contacto / Soporte
-
Si necesitas ayuda con la inicialización o tienes problemas al ejecutar, abre un issue o contacta al responsable del repositorio.

Archivo: [hope-frontend/README.md](hope-frontend/README.md)
