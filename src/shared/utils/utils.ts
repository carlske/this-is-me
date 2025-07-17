type TechStrings = {
  frontend: string
  backend: string
  others: string
}

export default function normalizeTech(
  techArray: Array<Partial<Record<keyof TechStrings, string[]>>>,
): TechStrings {
  const result: TechStrings = {
    frontend: '',
    backend: '',
    others: '',
  }

  techArray.forEach((item) => {
    ;(Object.keys(item) as (keyof TechStrings)[]).forEach((key) => {
      result[key] = item[key]!.join(', ')
    })
  })

  return result
}
