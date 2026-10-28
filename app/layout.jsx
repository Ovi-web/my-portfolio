import './globals.css'

export const metadata = {
  title: 'Hasanuzzaman Ovi — Full-Stack Developer',
  description:
    'Portfolio of Hasanuzzaman Ovi, a full-stack web developer building thoughtful, scalable web experiences with React, Next.js, and Go.',
  openGraph: {
    title: 'Hasanuzzaman Ovi — Full-Stack Developer',
    description:
      'Crafting scalable, interactive web experiences with Next.js, React, modern JavaScript, and Go.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
