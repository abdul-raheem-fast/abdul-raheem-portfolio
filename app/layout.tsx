import './globals.css'
import './output.css'
import './image-guidelines.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improves performance by showing a fallback font until the custom font loads
  preload: true
})

export const metadata = {
  title: 'Abdul Raheem - Full Stack & AI Engineer',
  description: 'Professional portfolio of Abdul Raheem - Full Stack Developer, MERN Stack Specialist, and AI Engineer. Showcasing cutting-edge projects and innovative solutions.',
  keywords: 'Abdul Raheem, Full Stack Developer, MERN Stack, AI Engineer, React, Node.js, Next.js, TypeScript, Machine Learning',
  authors: [{ name: 'Abdul Raheem' }],
  creator: 'Abdul Raheem',
  publisher: 'Abdul Raheem',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abdul-raheem.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Abdul Raheem - Full Stack & AI Engineer',
    description: 'Professional portfolio showcasing innovative web development and AI solutions',
    url: 'https://abdul-raheem.dev',
    siteName: 'Abdul Raheem Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdul Raheem Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Raheem - Full Stack & AI Engineer',
    description: 'Professional portfolio showcasing innovative web development and AI solutions',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white antialiased`}>
        <div className="relative min-h-screen">
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 pointer-events-none" />
          
          {/* Optimized animated background elements with will-change for better performance */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}