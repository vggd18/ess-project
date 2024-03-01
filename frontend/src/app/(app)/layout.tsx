import { HeaderUser } from '@/components/header/header-user'
import '../globals.css'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <HeaderUser />
        {children}
      </body>
    </html>
  )
}
