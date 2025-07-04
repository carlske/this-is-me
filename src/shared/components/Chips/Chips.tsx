import { useState } from 'react'
import Modal from '@/shared/components/Modal/Modal'

interface ChipProps {
  skill: string
}

interface ChipListProps {
  skills: Record<string, string>
}

interface ChipButtonProps {
  onClick: () => void
}

export const Chip = ({ skill }: ChipProps) => (
  <span className="bg-core-pink text-rice mr-1.5 rounded-lg p-2 text-xs font-bold">{skill}</span>
)

const ChipButton = ({ onClick }: ChipButtonProps) => (
  <span
    className="dark:bg-wasabi bg-rice dark:hover:bg-matcha dark:text-deep-black mr-1.5 rounded-lg p-2 text-xs font-bold hover:cursor-pointer hover:opacity-80"
    onClick={onClick}
  >
    Show more
  </span>
)

export const ChipList = ({ skills }: ChipListProps) => {
  const [open, setOpen] = useState(false)

  const { backend, frontend, others } = skills

  const handleShowMore = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Chip skill="Backend" />
      <Chip skill="Frontend" />
      <ChipButton onClick={handleShowMore} />

      {open && (
        <Modal isOpen={open} onClose={handleClose} title="Skills">
          <h3 className="mb-4 text-xl font-bold">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {backend.split(',').map((skill) => (
              <Chip key={skill} skill={skill} />
            ))}
          </div>
          <h3 className="mb-4 text-xl font-bold">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {frontend.split(',').map((skill) => (
              <Chip key={skill} skill={skill} />
            ))}
          </div>
          <h3 className="mb-4 text-xl font-bold">Otros</h3>
          <div className="flex flex-wrap gap-2">
            {others.split(',').map((skill) => (
              <Chip key={skill} skill={skill} />
            ))}
          </div>
        </Modal>
      )}
    </>
  )
}
