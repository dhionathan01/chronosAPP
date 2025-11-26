export function formatedSecondsRemainingToMinutes(seconds: number) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secondsFormated = Math.round(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${secondsFormated}`;
}
