interface FavoriteChannelProps {
  url: string
  thumb: string
  name: string
}

export default function FavoriteChannelCard({ url, thumb, name }: FavoriteChannelProps) {
  return (
    <div
      key={url}
      className='video-card'>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'>
        <img
          src={thumb}
          alt='Thumbnail do video'
        />
        <span>{name}</span>
      </a>
    </div>
  )
}
