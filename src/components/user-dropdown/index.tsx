'use client'

import { useContext, useState } from 'react'
import { Svg } from '@/UI'
import { Context } from '../../app/providers'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'

import s from './styles.module.scss'

export const UserDropDown: React.FC = observer(() => {
  const [showMenu, setShowMenu] = useState(false)

  const { authStore } = useContext(Context)
  const user = authStore.user

  return (
    <div className={s.user}>
      {!authStore.isAuth ?
        <p>Загрузка...</p>
        :
        <>
          <Image src={'/ava.jpg'} alt='' width={50} height={50} />
          <div
            className={s.name}
            onClick={() => { setShowMenu(!showMenu) }}
          >
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <Svg icon='show-arrow' />
          </div>
        </>
      }
      <div className={`${s.menu} ${showMenu ? s.show : ''}`}>
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
    </div>
  )
})