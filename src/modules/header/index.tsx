import Link from 'next/link'

import { Container } from '@/components'
import { SearchInput } from '@/components/search'
import { UserDropDown } from '@/components/user-dropdown'

import s from '@/styles.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Container type='header'>
        <div className={s.content}>
          <Link href='/home'>
            <p className={s.mockup}>Troom</p>
          </Link>
          <SearchInput />
          <UserDropDown />
        </div>
      </Container>
    </header>
  )
}