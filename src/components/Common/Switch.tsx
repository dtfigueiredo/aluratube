import { useEffect } from 'react'
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
  }, [theme, setTheme])

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
      {theme === 'light' ? <span>☀️</span> : <span>🌙</span>}
      {/* {theme === 'light' ? <CiSun /> : <CiCloudMoon />} */}
    </div>
  )
}
