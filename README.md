# hjrbda-site

Hadejia-Jama'are River Basin Development Authority (H-JRBDA) website. Next.js app with TypeScript, Tailwind CSS, Drizzle ORM, and Better-Auth.

## Features

- **TypeScript** – Type safety and better DX
- **Next.js** – Full-stack React framework
- **Tailwind CSS** – Utility-first CSS
- **shadcn/ui** – Reusable UI components
- **Drizzle** – TypeScript-first ORM
- **PostgreSQL** – Database
- **Better-Auth** – Authentication
- **Biome** – Linting and formatting

## Getting Started

Install dependencies:

```bash
bun install
```

### Database (optional)

1. Set up PostgreSQL and add `DATABASE_URL` to `.env`.
2. Apply schema:

```bash
bun run db:push
```

### Run dev server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `bun run dev` – Development server
- `bun run build` – Production build
- `bun run start` – Start production server
- `bun run check` – Biome format and lint
- `bun run db:push` – Push schema to database
- `bun run db:studio` – Drizzle Studio
- `bun run db:generate` – Generate migrations

## Project structure

```
hjrbda-site/
├── src/
│   ├── app/          # Next.js App Router (pages, layouts)
│   ├── components/   # React components
│   └── lib/          # db, auth, env, actions, utils
├── package.json
├── next.config.ts
├── drizzle.config.ts
└── tsconfig.json
```
