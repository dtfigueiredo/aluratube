import styled from 'styled-components'

export const StyleTimeline = styled.section`
  padding: 1rem;

  .playlist-section {
    margin: 2rem auto;
    overflow: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

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
    color: inherit;
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
