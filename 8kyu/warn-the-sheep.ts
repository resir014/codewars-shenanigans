// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

export function warnTheSheep(queue: string[]): string {
  const reversedQueue = queue.reverse();
  const wolfPosition = reversedQueue.findIndex((animal) => animal === 'wolf');

  if (wolfPosition === 0) {
    return 'Pls go away and stop eating my sheep';
  }

  return `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
}

console.log(
  warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']),
  'Oi! Sheep number 2! You are about to be eaten by a wolf!',
);
console.log(
  warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
  'Oi! Sheep number 5! You are about to be eaten by a wolf!',
);
console.log(
  warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
  'Oi! Sheep number 6! You are about to be eaten by a wolf!',
);
console.log(
  warnTheSheep(['sheep', 'wolf', 'sheep']),
  'Oi! Sheep number 1! You are about to be eaten by a wolf!',
);
console.log(warnTheSheep(['sheep', 'sheep', 'wolf']), 'Pls go away and stop eating my sheep');
