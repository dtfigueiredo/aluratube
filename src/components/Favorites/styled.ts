import styled from 'styled-components'

export const StyledFavorites = styled.section`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.backgroundBase};
  color: ${(props) => props.theme.colors.textColorBase};

  h2 {
    margin-bottom: 1rem;
    font-weight: 700;
  }
  &::first-letter {
    text-transform: uppercase;
  }

  .favorites-section {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    ::-webkit-scrollbar {
      height: 0.75rem;
      width: 0.75rem;
      background: #99999935;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background-color: ${(props) => props.theme.colors.textColorLevel1};
      border-radius: 10px;
    }

    @media screen and (max-width: 425px) {
      ::-webkit-scrollbar {
        height: 0.25rem;
        width: 0.25rem;
        background: #99999935;
      }
      ::-webkit-scrollbar-thumb:horizontal {
        background-color: ${(props) => props.theme.colors.textColorLevel1};
        /* background: #121212; */
        border-radius: 10px;
      }
    }

    @media screen and (max-width: 599px) {
      overflow: hidden;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    }
  }

  .favorites-card {
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  a {
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme.colors.textColorLevel1};
  }

  img {
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
  }

  span {
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColorLevel1};
    line-height: 1.125rem;
  }
`
