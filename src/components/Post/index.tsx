import Image from 'next/image'

import postImage from '@/assets/mock.png'
import { PostHeader, PostText, PostFooter } from '@/UI'

import s from './styles.module.scss'

export const Post = () => {
  return (
    <div className={s.post}>
      <PostHeader />
      <PostText />
      <Image className={s.image} src={postImage} alt='post' />    
      <PostFooter />
    </div>
  )
}