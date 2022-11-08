import Logo from '../Common/Logo'
import SearchBar from '../Common/SearchBar'
import Switch from '../Common/Switch'
import { StyledHeader, StyleHeaderSection } from './styled'

interface profileProps {
  github: string
  name: string
  job: string
  banner: string
}

export default function Header({ github, name, job, banner }: profileProps) {
  return (
    <StyledHeader>
      <StyleHeaderSection>
        <div className='menu-bar'>
          <Logo />
          <SearchBar />
          <Switch />
        </div>
      </StyleHeaderSection>

      <img
        className='banner'
        src={banner}
        alt='Banner'
      />

      <StyleHeaderSection>
        <div className='profile-info'>
          <img
            src={`https://github.com/${github}.png`}
            alt='Banner'
          />

          <div>
            <h3>{name}</h3>
            <p>{job}</p>
          </div>
        </div>
      </StyleHeaderSection>
    </StyledHeader>
  )
}
