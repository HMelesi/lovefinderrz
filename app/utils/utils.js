export default function getCurrentTime() {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  return time;
}
