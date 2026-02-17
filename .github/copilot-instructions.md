# Copilot Instructions

## Project overview
- Single-page React app bootstrapped with Vite.
- Entry point mounts `App` into `#root` in [src/main.jsx](src/main.jsx).
- UI lives in [src/App.jsx](src/App.jsx); styles are split between [src/App.css](src/App.css) and [src/index.css](src/index.css).
- Static assets live in [src/assets/](src/assets/) and [public/](public/).
- Vite is configured with a non-root base path (`/homepage/`) in [vite.config.js](vite.config.js); keep this when generating asset URLs or routing.

## Key workflows
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`

## Conventions and patterns (from current code)
- Components are plain function components using React Hooks (see `useState` in [src/App.jsx](src/App.jsx)).
- Import global styles in [src/main.jsx](src/main.jsx) and component-scoped styles in the component file.
- Keep `App` as the top-level component rendered by `main.jsx`.

## Integration points
- React 19 + ReactDOM client entry via `createRoot` (see [src/main.jsx](src/main.jsx)).
- Vite plugin `@vitejs/plugin-react` is the only build plugin (see [vite.config.js](vite.config.js)).

## Examples to follow
- Component structure and asset imports: [src/App.jsx](src/App.jsx)
- Base styling and root layout: [src/index.css](src/index.css)
