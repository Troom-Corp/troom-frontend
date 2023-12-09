import Image from "next/image"

import { authStore, uiStore } from '@/store'
import { Svg, UserDropDown } from "@/UI"

import s from './styles.module.scss'


export const UserCard = () => {
  const user = authStore.user

  return (
    <div className={s.user}>
      {/* {!authStore.isAuth ?
        <p>Загрузка...</p>
        : */}
        <>
          <Image src={'/ava.jpg'} alt='' width={50} height={50} />
          <div
            className={s.name}
            onClick={() => { uiStore.setUserMenu(!uiStore.userMenu) }}
          >
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <Svg icon='show-arrow' />
          </div>
        </>
      {/* } */}
      <UserDropDown />
    </div>
  )
}