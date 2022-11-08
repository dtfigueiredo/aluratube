import profileConfig from '../../config.json'
import AddButton from '../components/AddButton'
import Favorites from '../components/Favorites'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Timeline from '../components/Timeline'

export default function App() {
  return (
    <>
      <Modal />

      <AddButton />

      <Header
        github={profileConfig.github}
        name={profileConfig.name}
        job={profileConfig.job}
        banner={profileConfig.banner}
      />

      <Timeline playlists={profileConfig.playlists} />

      <Favorites favorites={profileConfig.favorites} />
    </>
  )
}
