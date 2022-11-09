import FavoriteChannelCard from '../Common/FavoriteChannelCard'
import { StyledFavorites } from './styled'

interface FavoriteChannelProps {
  url: string
  thumb: string
  name: string
}

export default function Favorites({ favorites }: any) {
  const favoriteName: string[] = Object.keys(favorites)
  const title: string = favoriteName.join('')

  return (
    <StyledFavorites>
      {favoriteName.map((favorite) => {
        const channels = favorites[favorite]

        return (
          <section
            key={title}
            className='favorite-section'>
            <h2>{title}</h2>
            <div className='favorites-container'>
              {channels.map((c: FavoriteChannelProps) => {
                return (
                  <FavoriteChannelCard
                    key={c.url}
                    url={c.url}
                    name={c.name}
                    thumb={c.thumb}
                  />
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledFavorites>
  )
}
