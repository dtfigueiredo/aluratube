import { StyledFavorites } from './styled'

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
              {channels.map((c: any) => {
                return (
                  <div
                    key={c.url}
                    className='favorites-card'>
                    <a
                      href={c.url}
                      target='_blank'
                      rel='noreferrer'>
                      <img
                        src={c.thumb}
                        alt='Thumbnail do video'
                      />
                      <span>{c.name}</span>
                    </a>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledFavorites>
  )
}
