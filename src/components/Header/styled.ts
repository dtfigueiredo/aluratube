import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;

  .banner {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`

export const StyleHeaderSection = styled.section`
  width: 100%;
  padding: 1rem;

  .menu-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 100%;
      max-width: 80px;
      @media (min-width: 600px) {
        max-width: 125px;
      }
    }

    .input-box {
      width: 425px;
      display: flex;
      input {
        flex: 1;
        padding: 0.5rem 1rem;
      }

      button {
        padding: 0.5rem 1.25rem;
        border: 1px solid #111;
        background-color: #f0f0f0;
        cursor: pointer;
      }
    }

    .switch {
      width: 50px;
      height: 25px;
      background-color: #121212;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: #212121;
      }
    }
  }

  .profile-info {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    h3 {
      font-size: 1.5rem;
      font-style: 700;
      line-height: 1.75rem;
      margin-bottom: 0.25rem;
    }

    p {
      line-height: 1.125rem;
      color: #666666;
    }
  }
`
