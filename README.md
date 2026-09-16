# Omar Yahya — Portfolio

Personal portfolio website of Omar Yahya, a Computer Engineering student at Birzeit University. This is a monorepo containing both the public-facing site and its contact-form API.

- **Live site:** https://omar-yahya.vercel.app
- **Frontend:** [`frontend/`](frontend) — Next.js (App Router) + TypeScript + Tailwind CSS
- **Backend:** [`backend/`](backend) — Django + Django REST Framework, PostgreSQL (Neon)

## Project Structure

```
.
├── frontend/   Next.js site (pages, components, styles, static assets)
└── backend/    Django REST API (currently just the contact form endpoint)
```

## Frontend

### Setup

```bash
cd frontend
npm install
npm run dev                  # http://localhost:3000
```

### Tech stack

React, Next.js, TypeScript, Tailwind CSS, Radix UI / shadcn components, lucide-react icons.

## Backend

### Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows (use `source venv/bin/activate` on macOS/Linux)
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver   # http://127.0.0.1:8000
```

The database is [Neon](https://neon.tech) (serverless PostgreSQL), with a local SQLite fallback for development.

### API

| Method | Endpoint         | Description                                   |
| ------ | ---------------- | ---------------------------------------------- |
| `POST` | `/api/contact/`  | Saves a contact-form submission (`name`, `email`, `message`). Upserts by email. |
| `GET`/`POST` | `/api/accounts/` | List/create user profiles.               |

### Tech stack

Django, Django REST Framework, PostgreSQL (via `dj-database-url` + `psycopg2`), `django-cors-headers`.

## Notes

- CORS on the backend is currently open for local development; restrict `CORS_ALLOWED_ORIGINS` before deploying to production.
