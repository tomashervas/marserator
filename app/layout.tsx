import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marserator',
  description: 'Fun with numbers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const cookieStore = cookies()
  const themeColor = cookieStore.get('theme-color')?.value
  
  return (
    <html lang="en">
      <body className={`${inter.className}`} style={{background:themeColor || '#86efac'}}>
        {children}
      <ToastContainer autoClose={2000} theme="dark" />
        
      </body>
    </html>
  )
}
