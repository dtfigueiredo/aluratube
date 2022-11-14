import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { FavoritesPlaylistState } from '../../Atoms'
import FavoriteChannelCard from '../Common/FavoriteChannelCard'
import { StyledFavorites } from './styled'

interface FavoriteChannelProps {
  url: string
  thumbnail: string
  name: string
}

//supabaseClient
const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_PROJECT_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Favorites() {
  const [favorites, setFavorites] = useRecoilState(FavoritesPlaylistState)

  useEffect(() => {
    supabase
      .from('favoritos_playlist')
      .select('*')
      .then(({ data }) => {
        if (!data) return
        setFavorites(data)
      })
  }, [setFavorites])

  return (
    <StyledFavorites>
      <h2>favoritos</h2>
      <section className='favorites-section'>
        {favorites.map((f: FavoriteChannelProps) => {
          return (
            <FavoriteChannelCard
              key={f.url}
              url={f.url}
              thumb={f.thumbnail}
              name={f.name}
            />
          )
        })}
      </section>
    </StyledFavorites>
  )
}
