import { useRecoilValue } from 'recoil'
import { ThemeProvider } from 'styled-components'

import profileConfig from '../../config.json'
import { ThemeToggleState } from '../Atoms'
import Favorites from '../components/Favorites'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Timeline from '../components/Timeline'
import { DARK } from '../styles/dark'
import { LIGHT } from '../styles/light'

export default function App() {
  const userTheme = useRecoilValue(ThemeToggleState)

  const activeTheme = userTheme === 'light' ? LIGHT : DARK

  return (
    <ThemeProvider theme={activeTheme}>
      <Modal />

      <Header
        github={profileConfig.github}
        name={profileConfig.name}
        job={profileConfig.job}
        banner={profileConfig.banner}
      />

      <Timeline playlists={profileConfig.playlists} />

      <Favorites favorites={profileConfig.favorites} />
    </ThemeProvider>
  )
}
