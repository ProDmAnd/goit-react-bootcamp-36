export default function requestImitator(data = '', delay = 1500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), delay);
  });
}
