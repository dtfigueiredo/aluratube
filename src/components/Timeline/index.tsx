import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import {
  GamesPlaylistState,
  MusicPlaylistState,
  SearchBarInputState,
  StudyPlaylistState,
} from '../../Atoms'
import VideoCard from '../Common/VideoCard'
import { StyleTimeline } from './styled'

interface MusicPlaylistProps {
  id: string
  created_at: string
  title: string
  url: string
  thumbnail: string
  playlist: string
}

//supabaseClient
const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_PROJECT_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Timeline({ playlists }: any) {
  const searchValue = useRecoilValue(SearchBarInputState)

  const [musicPlaylist, setMusicPlaylist] = useRecoilState(MusicPlaylistState)
  const [gamesPlaylist, setGamesPlaylist] = useRecoilState(GamesPlaylistState)
  const [studyPlaylist, setStudyPlaylist] = useRecoilState(StudyPlaylistState)

  //buscando as tabelas no supabase
  useEffect(() => {
    supabase
      .from('musica_playlist')
      .select('*')
      .then(({ data }) => {
        if (!data) return
        setMusicPlaylist(data)
      })

    supabase
      .from('jogos_playlist')
      .select('*')
      .then(({ data }) => {
        if (!data) return
        setGamesPlaylist(data)
      })

    supabase
      .from('estudo_playlist')
      .select('*')
      .then(({ data }) => {
        if (!data) return
        setStudyPlaylist(data)
      })
  }, [setMusicPlaylist, setGamesPlaylist, setStudyPlaylist])

  return (
    <>
      <StyleTimeline>
        <h2>jogos</h2>
        <section className='playlist-section'>
          {gamesPlaylist
            .filter((m: MusicPlaylistProps) => {
              const titleNormalized = m.title.toLowerCase()
              const searchValueNormalized = searchValue.toLocaleLowerCase()
              return titleNormalized.includes(searchValueNormalized)
            })
            .map((m: MusicPlaylistProps) => {
              return (
                <VideoCard
                  key={m.id}
                  url={m.url}
                  thumb={m.thumbnail}
                  title={m.title}
                />
              )
            })}
        </section>
      </StyleTimeline>

      <StyleTimeline>
        <h2>músicas</h2>
        <section className='playlist-section'>
          {musicPlaylist
            .filter((m: MusicPlaylistProps) => {
              const titleNormalized = m.title.toLowerCase()
              const searchValueNormalized = searchValue.toLocaleLowerCase()
              return titleNormalized.includes(searchValueNormalized)
            })
            .map((m: MusicPlaylistProps) => {
              return (
                <VideoCard
                  key={m.id}
                  url={m.url}
                  thumb={m.thumbnail}
                  title={m.title}
                />
              )
            })}
        </section>
      </StyleTimeline>

      <StyleTimeline>
        <h2>estudo</h2>
        <section className='playlist-section'>
          {studyPlaylist
            .filter((m: MusicPlaylistProps) => {
              const titleNormalized = m.title.toLowerCase()
              const searchValueNormalized = searchValue.toLocaleLowerCase()
              return titleNormalized.includes(searchValueNormalized)
            })
            .map((m: MusicPlaylistProps) => {
              return (
                <VideoCard
                  key={m.id}
                  url={m.url}
                  thumb={m.thumbnail}
                  title={m.title}
                />
              )
            })}
        </section>
      </StyleTimeline>
    </>
  )
}
