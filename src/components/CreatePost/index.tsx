import s from './styles.module.scss'

export const CreatePost = () => {
  return (
    <div className={s.create}>
      <input type='text' placeholder='Create new post' />
    </div>
  )
}