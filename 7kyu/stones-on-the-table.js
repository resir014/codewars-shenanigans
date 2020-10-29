// ['R', 'G', 'B']

/**
 * @param {string} stones
 */
function solve(stones) {
  const splittedStrings = stones.split('');
  let stonesToRemove = 0;

  for (let i = 0; i < splittedStrings.length; i++) {
    const char = splittedStrings[i];
    const prevChar = i !== 0 ? splittedStrings[i - 1] : undefined;

    if (char === prevChar) {
      stonesToRemove++;
    }
  }

  return stonesToRemove;
}

console.log(solve('RRGGBB'), 3);
console.log(solve('RGBRGB'), 0);
console.log(solve('BGRBBGGBRRR'), 4);
console.log(solve('GBBBGGRRGRB'), 4);
console.log(solve('GBRGGRBBBBRRGGGB'), 7);
