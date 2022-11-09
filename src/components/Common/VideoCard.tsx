interface VideoCardProps {
  url: string
  thumb: string
  title: string
}

export default function VideoCard({ url, thumb, title }: VideoCardProps) {
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
        <span>{title}</span>
      </a>
    </div>
  )
}
