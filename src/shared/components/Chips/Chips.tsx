import { useState } from 'react'
import Modal from '@/shared/components/Modal/Modal'

interface ChipProps {
  skill: string
}

interface ChipListProps {
  skills: string[]
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

  const handleShowMore = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {skills.slice(0, 3).map((skill) => (
        <Chip key={skill} skill={skill} />
      ))}
      {skills.length > 3 && <ChipButton onClick={handleShowMore} />}

      {open && (
        <Modal isOpen={open} onClose={handleClose} title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Chip key={skill} skill={skill} />
            ))}
          </div>
        </Modal>
      )}
    </>
  )
}
