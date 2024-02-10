export const utilService = {
  getFormattedTime,
}

function getFormattedTime(timestamp: Date) {
  return (
    ("0" + timestamp.getHours()).slice(-2) +
    ":" +
    ("0" + timestamp.getMinutes()).slice(-2)
  )
}
