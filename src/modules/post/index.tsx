import { useState } from 'react'
import Image from 'next/image'

import postImage from '@/assets/mock.png'
import { PostFooter } from './post-footer'
import { PostText } from './post-text'

import s from '../styles.module.scss'



export const Post = () => {

  const [showText, setShowText] = useState(false)
  
  return (
    <div className={s.post}>
      <div className={s.header}>
        <img className={s.avatar} src="/yandex.svg" alt="" />
        <div className={s.info}>
          <p className={s.name}>Yandex Dev</p>
          <p>Компания / IT</p>
        </div>
        <p className={s.date}>20 Июня 2024</p>
      </div>
      <PostText />
      <Image className={s.image} src={postImage} alt='post' />    
      <PostFooter />
    </div>
  )
}