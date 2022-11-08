import styled from 'styled-components'

export const StyledFavorites = styled.section`
  padding: 1rem;

  .favorite-section {
    margin: 2rem auto;

    h2 {
      margin-bottom: 1rem;
      font-weight: 700;
    }
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .favorites-container {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

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
    color: inherit;
  }

  img {
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
  }

  span {
    text-align: center;
    font-weight: 600;
    color: #666666;
    line-height: 1.125rem;
  }
`
