export const formatDate = (date: string | Date): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const isVaccinationDue = (nextVaccinationDate: string, daysAhead = 7): boolean => {
  const dueDate = new Date(nextVaccinationDate)
  const checkDate = new Date()
  checkDate.setDate(checkDate.getDate() + daysAhead)
  
  return dueDate <= checkDate
}

export const getDaysUntilVaccination = (nextVaccinationDate: string): number => {
  const dueDate = new Date(nextVaccinationDate)
  const today = new Date()
  const diffTime = dueDate.getTime() - today.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export const generateTagId = (): string => {
  const prefix = 'PC'
  const number = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `${prefix}${number}`
}