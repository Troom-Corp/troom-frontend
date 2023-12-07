import { Svg } from '@/UI'

import s from './styles.module.scss'

export const PostFooter = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_left}>
        <div className={s.footer_btn}>
          <Svg icon='like' />
          <p>965</p>
        </div>
        <div className={s.footer_btn}>
          <Svg icon='comment' />
          <p>72</p>
        </div>
        <div className={s.footer_btn}>
          <Svg icon='share' />
        </div>
      </div>
      <div className={s.footer_btn}>
        <Svg icon='views' />
        <p>91,532</p>
      </div>
    </div>
  )
}