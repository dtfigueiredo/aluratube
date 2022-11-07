import { StyleTimeline } from './styled'

export default function Timeline({ playlists }: any) {
  const playlistNames = Object.keys(playlists)

  return (
    <StyleTimeline>
      {playlistNames.map((playlist) => {
        const videos = playlists[playlist]

        return (
          <section
            key={playlist}
            className='playlist-section'>
            <h2>{playlist}</h2>
            <div className='videos-container'>
              {videos.map((v: any) => {
                return (
                  <div
                    key={v.url}
                    className='video-card'>
                    <a
                      href={v.url}
                      target='_blank'
                      rel='noreferrer'>
                      <img
                        src={v.thumb}
                        alt='Thumbnail do video'
                      />
                      <span>{v.title}</span>
                    </a>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyleTimeline>
  )
}
