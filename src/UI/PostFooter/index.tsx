import { PostStat } from '@/UI'

import s from './styles.module.scss'

const items = ['like', 'comment', 'share']

export const PostFooter = () => {
  return (
    <div className={s.footer}>
      <div className={s.left}>
        {items.map((i) => <PostStat key={i} type={i} />)}
      </div>
      <PostStat type='views' />
    </div>
  )
}