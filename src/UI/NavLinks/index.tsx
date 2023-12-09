'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { NavItems } from '@/utils'
import { Svg } from '@/UI'

import s from './styles.module.scss'

export const NavLinks = () => {
  const path = usePathname()

  return (
    <div className={s.links}>
      {NavItems.map(item => (
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
  )
}