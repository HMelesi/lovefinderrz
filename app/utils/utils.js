export default function getCurrentTime() {
  const today = new Date();
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const time = today.getHours() + ":" + minutes;
  return time;
}
