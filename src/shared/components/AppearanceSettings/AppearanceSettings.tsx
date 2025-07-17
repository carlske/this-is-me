import { useState, useRef, useEffect } from 'react'
import { Settings } from 'lucide-react'
import { X } from 'lucide-react'
import ThemeSwitcher from '@/shared/components/ThemeSwitcher/ThemeSwitcher'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Logo from '@/assets/logo.webp?url'

interface AppearanceSettingsProps {
  className?: string
}

const AppearanceSettings = ({ className }: AppearanceSettingsProps) => {
  const [open, setOpen] = useState(false)
  const settingsButtonRef = useRef<HTMLButtonElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (open) {
      modalRef.current?.focus()
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    } else {
      settingsButtonRef.current?.focus()
    }
  }, [open])

  return (
    <div className={`${className ?? ''} flex items-center space-x-2 transition-all duration-700`}>
      <button
        ref={settingsButtonRef}
        aria-label="Open appearance settings"
        onClick={() => setOpen(true)}
        className="border-none bg-transparent p-0"
        type="button"
      >
        <Settings className={`text-rice h-6 w-6 cursor-pointer hover:opacity-80`} />
      </button>
      {open && (
        <div
          className="bg-industrial fixed inset-0 z-50 flex flex-col items-center opacity-100"
          role="dialog"
          aria-modal="true"
          aria-labelledby="appearance-modal-title"
          aria-describedby="appearance-modal-desc"
        >
          <img
            src={Logo}
            loading="lazy"
            width={600}
            height={600}
            className="w-2xs object-cover"
            alt="Background image"
          />

          <div
            ref={modalRef}
            tabIndex={-1}
            className="relative top-0 w-0 min-w-[300px] rounded-lg bg-white p-4 shadow-lg outline-none"
          >
            <button
              className="absolute right-2 top-2 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 id="appearance-modal-title" className="mb-4 text-lg font-semibold">
              Configuración
            </h2>
            <div id="appearance-modal-desc" className="flex flex-col gap-4 text-sm">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AppearanceSettings
