import styled from 'styled-components'

export const StyledModal = styled.section`
  padding-top: 10rem;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 35;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  background-color: #11111190;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`
