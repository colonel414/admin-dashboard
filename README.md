<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
  <img alt="Shows all of the tools in the stack for this template, also listed in the README file." src="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
</picture>

<div align="center"><strong>Cornelius Admin Dashboard</strong></div>
<div align="center">Built with the Next.js App Router</div>
<br />
<div align="center">
<a href="http://admin-dash-template.vercel.sh/">Demo</a>
<span> 
</div>

## Overview

This is a template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/14)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [NextAuth.js](https://next-auth.js.org)
- Database - [Vercel Postgres](https://vercel.com/postgres)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Tremor](https://www.tremor.so)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

## Getting Started

During the deployment, Vercel will prompt you to create a new Postgres database. This will add the necessary environment variables to your project.

Inside the Vercel Postgres dashboard, create a table based on the schema defined in this repository.

```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  username VARCHAR(255)
);
```

```
CREATE TABLE accounts (
  account VARCHAR,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  username VARCHAR(255),
  bankname VARCHAR(255),
  branch VARCHAR(255)
);
```

```
ALTER TABLE accounts
ALTER COLUMN account TYPE VARCHAR USING account::VARCHAR;
```

```
ALTER TABLE accounts 
  REMOVE COLUMN email VARCHAR(255);
  ADD COLUMN name VARCHAR(255),
  ADD COLUMN username VARCHAR(255),
  ADD COLUMN bankname VARCHAR(255),
  ADD COLUMN branch VARCHAR(255);
```

Insert a row for testing:

```
INSERT INTO accounts (id, username, accountType, balance) VALUES (0500179099534, 'Corney', 'Current', '989000');
```

```
INSERT INTO users (id, email, name, username) VALUES (0500, 'me@site.com', 'Me', 'username');
```

Finally, run the following commands to start the development server:

```
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.

```
docker run -d \
  --name postgres-container \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=postgres \
  -p 5432:5432 \
  postgres:latest

```