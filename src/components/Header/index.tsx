import { useState } from 'react'
import { StyledHeader, StyleHeaderSection } from './styled'
import { VscSearch } from 'react-icons/vsc'

interface profileProps {
  github: string
  name: string
  job: string
  banner: string
}

export default function Header({ github, name, job, banner }: profileProps) {
  const [inputSearch, setInputSearch] = useState('')

  return (
    <StyledHeader>
      <StyleHeaderSection>
        <div className='menu-bar'>
          <img
            className='logo'
            src='logo-searchbar.png'
            alt='Logotipo Aluratube'
          />

          <div className='input-box'>
            <input
              type='text'
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <button onClick={() => console.log(inputSearch)}>
              <VscSearch size={20} />
            </button>
          </div>

          <div className='switch'></div>
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
