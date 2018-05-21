export function dateConverter(timestamp) {
  const rawDate = new Date(timestamp)
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = rawDate.getFullYear();
  const month = months[rawDate.getMonth()];
  const dt = rawDate.getDate();
  const hour = rawDate.getHours();
  const min = rawDate.getMinutes();
  const dateString = `dated ${month} ${dt}, ${year} at ${hour}:${min}`
  return dateString
}
