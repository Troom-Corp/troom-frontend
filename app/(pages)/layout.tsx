'use client'

import { Container } from "@/UI"
import { Header, Sidebar } from "@/components"
import { useAuth } from "@/hooks"
import { observer } from "mobx-react-lite"

interface PagesLayoutProps {
  children: React.ReactNode
}

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  useAuth('/signin')

  return (
    <>
      <Header />
      <Container type='sidebar'>
        <Sidebar />
        {children}
      </Container>
    </>
  )
}

export default observer(PagesLayout)