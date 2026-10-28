# Hasanuzzaman Ovi — Portfolio

A responsive developer portfolio built with Next.js App Router, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The form opens a prefilled email in the visitor's default mail app when no service is configured. To submit messages directly through Formspree, create a form and set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ID=your-form-id
```

Restart the development server after adding the environment variable.

## Production

```bash
npm run build
npm start
```
