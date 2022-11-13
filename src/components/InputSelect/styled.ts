import styled from 'styled-components'

import { InputSelectProps } from './types'

export const StyledInputSelect = styled.select<InputSelectProps>`
  flex: 1;
  padding: 0.5rem 1rem;

  background-color: ${(props) => props.theme.colors.backgroundLevel1};
  color: ${(props) => props.theme.colors.textColorBase};

  border: 1px solid;
  border-color: yellow;
  border-color: ${(props) =>
    props.invalid ? props.theme.colors.red : props.theme.colors.borderLevel1};
  border-radius: 0.25rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.textColorLevel1};
  }

  &:focus {
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.borderLevel1};
  }

  &:focus-visible {
    outline: none;
  }
`
