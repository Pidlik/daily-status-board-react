/**
 * Returns a random integer between min and max (min and max included)
 */
export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}