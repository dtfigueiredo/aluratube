import styled from 'styled-components'

export const StyledSwitch = styled.div`
  background-color: #333333;
  border: 0;
  padding: 0.25rem;
  font-size: 0.75rem;
  width: 3rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
  }

  span {
    display: inline-flex;
    width: 1.25rem;
    height: 1.25rem;
    align-items: center;
    justify-content: center;
  }

  label:before {
    content: '';
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + label:before {
    transform: translateX(100%);
  }
`
