'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Svg } from '@/UI'

import s from './styles.module.scss'

const navItems = [
  { path: '/home', text: 'Главная', image: 'home' },
  { path: '/jobs', text: 'Работа', image: 'jobs' },
  { path: '/messages', text: 'Сообщения', image: 'messages' },
]

export const Sidebar: React.FC = () => {
  const path = usePathname()

  return (
    <>
      <nav className={s.nav}>
        <div className={s.links}>
          {navItems.map(item => (
            <Link key={item.path} href={item.path}>
              <div className={`${s.item} ${item.path === path ? s.active : ''}`}>
                <Svg icon={item.image} />
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
          <Link href='/notifications'>
            <div className={`
              ${s.notifications}
              ${s.item}
              ${path === '/notifications' ? s.active : ''}`
            }>
              <div className={s.count}>9</div>
              <Svg icon='notifications' />
              <p>Уведомления</p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  )
}