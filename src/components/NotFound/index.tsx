import styled from 'styled-components'

const ErrorPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #818181;
  background-image: url('https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80');
  background-repeat: no-repeat;
  background-size: cover;
`

export default function NotFound() {
  return <ErrorPage />
}
