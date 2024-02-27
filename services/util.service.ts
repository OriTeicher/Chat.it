export const utilService = {
  getFormattedTime,
  getRandomInt,
  generateId,
}
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

function getFormattedTime(timestamp: Date) {
  return (
    ("0" + timestamp.getHours()).slice(-2) +
    ":" +
    ("0" + timestamp.getMinutes()).slice(-2)
  )
}

function getRandomInt(min: number = 0, max: number = 100) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

function generateId(length = 5) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("")
}
