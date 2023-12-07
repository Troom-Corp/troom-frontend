import s from './styles.module.scss'

export interface AuthInputProps {
  type: string
  value?: string
  placeholder?: string
  status?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onClick?: React.MouseEventHandler<HTMLInputElement>
}

export const UiInput: React.FC<AuthInputProps> = ({ type, value, placeholder, status, onChange, onClick }) => {
  return (
    <>
      <input
        className={`
          ${type === 'submit' ? s.submit : s.input} 
          ${status === 'success' ? s.input__success : ''} 
          ${status === 'error' ? s.input__error : ''}
        `}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        readOnly={type === 'submit'}
      />
    </>
  )
}