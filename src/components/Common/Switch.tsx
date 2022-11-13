import { useEffect } from 'react'
import { CiCloudMoon, CiSun } from 'react-icons/ci'
import { useRecoilState } from 'recoil'

import { ThemeToggleState } from '../../Atoms'

export default function Switch() {
  const [theme, setTheme] = useRecoilState(ThemeToggleState)

  //useEffect para não quebrar a dom devido ao serverSide rendering do next
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialTheme: string = localStorage.getItem('userTheme') as string
      setTheme(initialTheme)
    }
  }, [setTheme])

  const handleTheme = () => {
    if (theme === 'light') {
      if (typeof window !== 'undefined') {
        setTheme('dark')
        localStorage.setItem('userTheme', 'dark')
      }
    }
    if (theme === 'dark') {
      if (typeof window !== 'undefined') {
        setTheme('light')
        localStorage.setItem('userTheme', 'light')
      }
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
