import { useEffect } from 'react'
import { CiCloudMoon, CiSun } from 'react-icons/ci'
import { useRecoilState } from 'recoil'

import { ThemeToggleState } from '../../Atoms'

export default function Switch() {
  const [theme, setTheme] = useRecoilState(ThemeToggleState)

  //useEffect para não quebrar a dom devido ao serverSide rendering do next
  useEffect(() => {
    const initialTheme: string = localStorage.getItem('userTheme') as string
    console.log('tema from storage: ', initialTheme)
    console.log(window.localStorage)
    setTheme(initialTheme)
  }, [setTheme])

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('userTheme', 'dark')
    }
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('userTheme', 'light')
    }
  }

  return (
    <div
      className='switch'
      onClick={handleTheme}>
      {theme === 'light' ? <CiSun /> : <CiCloudMoon />}
    </div>
  )
}
