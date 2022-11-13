import styled from 'styled-components'
import { InputBlockProps } from '../Modal/types'

export const StyledInputBlock = styled.input<InputBlockProps>`
  width: 100%;
  padding: 0.5rem 1rem;

  background-color: ${(props) => props.theme.colors.backgroundLevel1};
  color: ${(props) => props.theme.colors.textColorBase};

  border: 1px solid;
  border-color: ${(props) => {
    console.log(props.theme)
    return props.invalid ? props.theme.colors.red : props.theme.colors.borderBase
  }};

  border-radius: 0.25rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.textColorLevel1};
  }

  &:focus {
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.borderLevel1};
  }

  &:focus-visible {
    ::placeholder {
      color: ${(props) => props.theme.colors.backgroundLevel1};
    }
    outline: none;
  }
`
