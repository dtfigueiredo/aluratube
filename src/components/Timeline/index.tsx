import { useRecoilValue } from 'recoil'

import { SearchBarInputState } from '../../Atoms'
import VideoCard from '../Common/VideoCard'
import { StyleTimeline } from './styled'

interface VideoProps {
  url: string
  thumb: string
  title: string
}

// interface PlaylistProps {
//   [key: string]: [
//     {
//       title: string
//       url: string
//       thumb: string
//     }
//   ]
// }

export default function Timeline({ playlists }: any) {
  const playlistNames = Object.keys(playlists)
  const searchValue = useRecoilValue(SearchBarInputState)

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
              {videos
                .filter((v: VideoProps) => {
                  const titleNormalized = v.title.toLowerCase()
                  const searchValueNormalized = searchValue.toLocaleLowerCase()
                  return titleNormalized.includes(searchValueNormalized)
                })
                .map((v: VideoProps) => {
                  return (
                    <VideoCard
                      key={v.url}
                      url={v.url}
                      thumb={v.thumb}
                      title={v.title}
                    />
                  )
                })}
            </div>
          </section>
        )
      })}
    </StyleTimeline>
  )
}
