'use client'

import { useContext, useState } from 'react'
import { Svg } from '@/UI'
import { Context } from '@/app/providers'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'

import styles from '@/styles/Header.module.scss'

export const UserDropDown: React.FC = observer(() => {
  const [showMenu, setShowMenu] = useState(false)

  const { authStore } = useContext(Context)
  const user = authStore.user

  return (
    <div className={styles.user}>
      {!authStore.isAuth ?
        <p>Загрузка...</p>
        :
        <>
          <Image src={'/ava.jpg'} alt='' width={50} height={50} />
          <div
            className={styles.name}
            onClick={() => { setShowMenu(!showMenu) }}
          >
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <Svg icon='show-arrow' />
          </div>
        </>
      }
      <div className={`${styles.menu} ${showMenu ? styles.show : ''}`}>
        <div className={styles.userCard}></div>
        <ul className={styles.list}>
          <div className={styles.item}>
            <li>✪ Настройки</li>
          </div>
          <div className={styles.item}>
            <li>✪ Тема</li>
          </div>
          <div className={styles.item}>
            <li>✪ Сообщить о проблеме</li>
          </div>
          <div onClick={() => authStore.signOut()} className={styles.item}>
            <li>✪ Выйти</li>
          </div>
        </ul>
      </div>
    </div>
  )
})