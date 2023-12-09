import { NavLinks } from '@/UI/NavLinks'

import s from './styles.module.scss'

export const Sidebar: React.FC = () => {
  return (
    <nav className={s.nav}>
      <NavLinks />
    </nav>
  )
}