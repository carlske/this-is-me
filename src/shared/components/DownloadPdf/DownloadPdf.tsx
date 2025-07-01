export const DownloadPdf = () => {
  const handledDownload = () => {}

  return (
    <button
      className="dark:bg-wasabi bg-core-pink dark:text-industrial text-rice rounded-xl p-5 font-bold hover:cursor-pointer hover:opacity-80"
      onClick={handledDownload}
    >
      Descarga mi cv
    </button>
  )
}
