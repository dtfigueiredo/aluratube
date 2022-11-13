import { StyledInputSelect } from './styled'
import { InputSelectProps } from './types'

export default function InputSelect({ name, value, onChange, onBlur, invalid }: InputSelectProps) {
  return (
    <>
      <StyledInputSelect
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        invalid={invalid}>
        <option
          value=''
          label='Escolha a playslit'>
          Escolha a playslit
        </option>
        <option
          value='jogos'
          label='Jogos'>
          Jogos
        </option>
        <option
          value='musica'
          label='Música'>
          Música
        </option>
        <option
          value='estudo'
          label='Estudo'>
          Estudo
        </option>
      </StyledInputSelect>
    </>
  )
}
