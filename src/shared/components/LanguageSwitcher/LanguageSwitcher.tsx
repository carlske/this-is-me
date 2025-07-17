const LanguageSwitcher = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Languaje</span>
      <select value="es" className="bg-rice text-wasabi rounded p-1">
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher
