import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.backgroundBase};
  color: ${(props) => props.theme.colors.textColorBase};

  .banner {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      height: 300px;
    }
  }
`

export const StyleHeaderSection = styled.section`
  width: 100%;
  padding: 1rem;

  .menu-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .logo {
      width: 100%;
      max-width: 80px;
      @media (min-width: 600px) {
        max-width: 125px;
      }
    }

    .input-box {
      flex: 1;
      width: 100%;
      max-width: 425px;
      display: flex;

      @media screen and (max-width: 599px) {
        width: 100%;
      }

      input {
        flex: 1;
        width: 100%;
        padding: 0.5rem 1rem;
        outline: none;

        @media screen and (max-width: 599px) {
          padding: 0.25rem 0.25rem;
        }
      }

      button {
        padding: 0.5rem 1.25rem;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.borderLevel1};
        background-color: ${(props) => props.theme.colors.backgroundLevel2};

        cursor: pointer;

        @media screen and (max-width: 599px) {
          padding: 0.25rem 0.5rem;
        }
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
      color: ${(props) => props.theme.colors.textColorLevel1};
    }
  }
`
