import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/purecounterjs@1.0.0/dist/purecounter.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
