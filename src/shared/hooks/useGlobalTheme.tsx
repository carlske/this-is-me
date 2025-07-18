import { useEffect, useState } from 'react'

const useGlobalTheme = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const localStorageTheme = localStorage.getItem('darkTheme')
    setDarkMode(localStorageTheme !== 'light')
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) {
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
      localStorage.setItem('darkTheme', darkMode ? 'dark' : 'light')
    }
  }, [darkMode, hydrated])

  return { darkMode, setDarkMode, hydrated, setHydrated }
}

export default useGlobalTheme
