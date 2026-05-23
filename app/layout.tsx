import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Cookie Consent Audit Fixer — Fix Violations Before You Get Fined',
  description: 'Scan your website for GDPR cookie compliance issues and get legal-compliant consent implementations instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9280c95a-30e6-4c44-b07b-3fa244885b56"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
