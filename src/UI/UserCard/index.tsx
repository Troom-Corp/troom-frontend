import Image from "next/image"

import { Svg, UserDropDown } from "@/UI"
import { UserCardLoader } from "./loader"
import { authStore, uiStore } from '@/store'

import s from './styles.module.scss'


export const UserCard = () => {
  const user = authStore.user

  return (
    <div className={s.user}>
      {!authStore.isAuth ?
        <UserCardLoader />
        :
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
      }
      <UserDropDown />
    </div>
  )
}