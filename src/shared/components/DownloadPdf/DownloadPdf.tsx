const data = await import.meta.env

export const DownloadPdf = () => {
  const handledDownload = async () => {
    const response = await fetch(`/cv_carlos.pdf`)

    if (!response.ok) {
      throw new Error(`Error al descargar: ${response.status}`)
    }

    const pdf = await response.blob()

    const url = window.URL.createObjectURL(pdf)

    const link = document.createElement('a')
    link.href = url
    link.download = 'cv_carlosv_diaz.pdf'
    document.body.appendChild(link)
    link.click()

    link.remove()
    window.URL.revokeObjectURL(url)
  }

  return (
    <button
      className="bg-wasabi text-industrial rounded-xl p-5 font-bold hover:cursor-pointer hover:opacity-80"
      onClick={handledDownload}
    >
      Descarga mi cv
    </button>
  )
}
