import Link from 'next/link'

import { Container, Search, UserCard } from '@/UI'

import s from './styles.module.scss'


export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Container type='header'>
        <div className={s.content}>
          <Link href='/home'>
            <p className={s.mockup}>Troom</p>
          </Link>
          <Search />
          <UserCard />
        </div>
      </Container>
    </header>
  )
}