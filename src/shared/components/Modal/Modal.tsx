interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="bg-industrial fixed inset-0 z-10 flex items-center justify-center bg-opacity-10">
      <div className="bg-rice w-full rounded-2xl p-6 shadow-lg">
        {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
        <div className="mb-4">{children}</div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            tabIndex={0}
            className="bg-rice text-industrial border-industrial border-1 rounded-xl p-1 font-bold hover:cursor-pointer hover:opacity-80"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
