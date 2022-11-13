import { StyledInputBlock } from './styled'
import { InputBlockProps } from '../Modal/types'

export default function InputBlock({
  name,
  value,
  onChange,
  onBlur,
  type,
  placeholder,
  invalid,
}: InputBlockProps) {
  console.log(invalid)
  return (
    <StyledInputBlock
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder={placeholder}
      invalid={invalid}
    />
  )
}
