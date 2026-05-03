# Vue 3 Boilerplate

Clean Vue starter for production apps.

## What's inside

- Vue 3 + Vite + TypeScript
- Pinia store
- Vue Router
- REST API client
- JWT auth helpers
- i18n: English, Uzbek, and Russian
- TailwindCSS + DaisyUI
- VeeValidate + Maska
- Biome for linting and formatting
- AutoAnimate for lightweight UI animations

No GraphQL. REST-first by default.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:3000`.

## Environment

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_DEV_PORT=3000
```

## Scripts

```bash
npm run dev          # start Vite dev server
npm run build        # type-check and build
npm run preview      # preview production build
npm run type-check   # run vue-tsc
npm run lint         # fix lint and format issues with Biome
npm run lint:ci      # CI lint check
npm run format       # format files
npm run audit        # npm security audit
```

## REST and JWT

API helpers live here:

```text
src/core/services/api.service.ts
src/core/services/token.service.ts
src/modules/auth/services/auth.service.ts
src/modules/auth/stores/auth.store.ts
```

Default auth endpoints:

```text
POST /auth/login
POST /auth/register
GET  /auth/me
POST /auth/refresh
POST /auth/logout
```

JWT access token is sent as:

```http
Authorization: Bearer <token>
```

## i18n

Translations live here:

```text
src/core/languages/en.json
src/core/languages/uz.json
src/core/languages/ru.json
```

Use translations in components:

```ts
const { t } = useI18n()
t('nav.home')
```

## Animations

Lightweight UI animations use `@formkit/auto-animate`.

```vue
<template>
  <div v-auto-animate>
    <p v-if="isVisible">Animated content</p>
  </div>
</template>
```

## Project structure

```text
src/
  core/       shared components, plugins, services, models
  layouts/    app layouts
  modules/    feature modules
  utils/      small helpers
```

## Recommended IDE

Use VS Code with:

- Vue Official extension
- Biome extension

## License

MIT
