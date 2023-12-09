import s from './styles.module.scss'

interface ContainerProps {
  type: string
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ type, children }) => {
  switch (type) {
    case 'header':
      return (
        <div className={s.header}>
          {children}
        </div>
      )
    case 'sidebar':
      return (
        <div className={s.sidebar}>
          {children}
        </div>
      )
    case 'main':
      return (
        <div className={s.main}>
          {children}
        </div>
      )
    case 'content':
      return (
        <div className={s.content}>
          {children}
        </div>
      )
    case 'aside':
      return (
        <div className={s.aside}>
          {children}
        </div>
      )
    case 'full':
      return (
        <div className={s.full}>
          {children}
        </div>
      )

    default: return null
  }
}