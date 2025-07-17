import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeToggle = ({ className }: ThemeSwitcherProps) => {
  const [darkMode, setDarkMode] = useState(true)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('darkTheme')
    setDarkMode(localStorageTheme !== 'light')
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    localStorage.setItem('darkTheme', theme)
  }, [darkMode])

  if (!hydrated) return null

  let globalClass = 'flex items-center space-x-2 transition-all duration-700'

  return (
    <div className={`${globalClass} ${className ?? ''}`}>
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ${darkMode ? 'text-matcha' : 'text-rice'}`}
      />
      <button
        aria-label="change theme"
        onClick={() => setDarkMode((prev) => !prev)}
        className={`relative float-right mt-1 inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors duration-300 ${darkMode ? 'bg-industrial' : 'bg-matcha'}`}
      >
        <span
          className={`bg-industrial dark:bg-matcha inline-block h-4 w-4 transform rounded-full transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ${darkMode ? 'text-industrial' : 'text-matcha'}`}
      />
    </div>
  )
}

export default ThemeToggle
