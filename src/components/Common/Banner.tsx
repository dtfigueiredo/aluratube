interface BannerProps {
  url: string
}

export default function Banner({ url }: BannerProps) {
  return (
    <img
      className='banner'
      src={url}
      alt='Banner'
    />
  )
}
