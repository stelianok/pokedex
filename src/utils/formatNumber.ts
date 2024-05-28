export default function formatNumber(numberToFormat: number, length: number): string {
  return numberToFormat.toString().padStart(length, '0');
}