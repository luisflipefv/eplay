import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, children, title, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink type="link" to={to as string} title={title} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
