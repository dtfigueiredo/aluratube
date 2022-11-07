import profileConfig from '../../config.json'
import Header from '../components/Header'
import Timeline from '../components/Timeline'

export default function App() {
  return (
    <>
      <Header
        github={profileConfig.github}
        name={profileConfig.name}
        job={profileConfig.job}
        banner={profileConfig.banner}
      />
      <Timeline playlists={profileConfig.playlists} />
    </>
  )
}