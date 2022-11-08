import styled from 'styled-components'

export const StyledAddButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;

  border: 2px solid transparent;
  border-radius: 50%;

  background-color: ${(props) => props.theme.colors.red};

  color: #fff;
  font-size: 1.25rem;

  z-index: 15;
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    border: 2px solid;
    border-color: ${(props) => props.theme.colors.borderLevel1};
  }

  @media screen and (max-width: 599px) {
    width: 2.75rem;
    height: 2.75rem;
  }
`
