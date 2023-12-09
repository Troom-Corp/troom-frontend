'use client'

import { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import { authStore, uiStore } from '@/store'

import s from './styles.module.scss'

export const UserDropDown: React.FC = observer(() => {

  const dropDownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if(!dropDownRef.current?.contains(e.target as Node)) {
        uiStore.setUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <div ref={dropDownRef} className={`${s.menu} ${uiStore.userMenu ? s.show : ''}`}>
      <div className={s.userCard}></div>
      <ul className={s.list}>
        <div className={s.item}>
          <li>✪ Настройки</li>
        </div>
        <div className={s.item}>
          <li>✪ Тема</li>
        </div>
        <div className={s.item}>
          <li>✪ Сообщить о проблеме</li>
        </div>
        <div onClick={() => authStore.signOut()} className={s.item}>
          <li>✪ Выйти</li>
        </div>
      </ul>
    </div>
  )
})