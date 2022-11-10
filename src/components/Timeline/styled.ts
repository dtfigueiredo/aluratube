import styled from 'styled-components'

export const StyleTimeline = styled.section`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.backgroundLevel1};
  color: ${(props) => props.theme.colors.textColorBase};

  .playlist-section {
    margin: 2rem auto;

    h2 {
      margin-bottom: 1rem;
      font-weight: 700;
    }
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .videos-container {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    overflow: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

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
  }

  .video-card {
    height: 225px;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  a {
    width: 210px;
    height: 185px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${(props) => props.theme.colors.textColorLevel1};
    scroll-snap-align: start;
  }

  img {
    width: 210px;
    height: 120px;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  span {
    /* white-space: nowrap; */
    /* overflow-wrap: break-word; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    line-height: 1.125rem;
  }
`
