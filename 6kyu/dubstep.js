// https://www.codewars.com/kata/551dc350bf4e526099000ae5

/**
 * @param {string} song
 */
function songDecoder(song) {
  return song.split('WUB').filter(Boolean).join(' ');
}

console.log(
  songDecoder('AWUBWUBWUBBWUBWUBWUBC'),
  'A B C',
  'multiples WUB should be replaced by only 1 space',
);
