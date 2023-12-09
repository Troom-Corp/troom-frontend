import { Svg } from "@/UI"

import s from './styles.module.scss'

interface PostButtonProps {
  type: string
}

export const PostStat: React.FC<PostButtonProps> = ({ type }) => {
  switch (type) {
    case 'like':
      return (
        <div className={s.stat}>
          <Svg icon='like' />
          <p>965</p>
        </div>
      )
    case 'comment':
      return (
        <div className={s.stat}>
          <Svg icon='comment' />
          <p>72</p>
        </div>
      )
    case 'share':
      return (
        <div className={s.stat}>
          <Svg icon='share' />
        </div>
      )
    case 'views':
      return (
        <div className={s.stat}>
          <Svg icon='views' />
          <p>91,532</p>
        </div>
      )
    default: return null
  }
}