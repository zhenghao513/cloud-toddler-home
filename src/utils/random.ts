export default function random(min: number, max: number): string {
  min = Math.ceil(min);
  max = Math.floor(max);
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}
