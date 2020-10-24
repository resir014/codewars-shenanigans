// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

export function duplicateCount(text: string): number {
  let repeatedChars: string[] = [];

  if (text.length !== 0) {
    const charCount = new Map<string, number>();

    text.split('').forEach((char) => {
      const lowercase = char.toLowerCase();
      const current = charCount.get(lowercase);
      if (!current) {
        charCount.set(lowercase, 1);
      } else {
        charCount.set(lowercase, current + 1);
      }
    });

    charCount.forEach((value, key) => {
      if (value > 1) {
        repeatedChars.push(key);
      }
    });

    return repeatedChars.length;
  }

  return 0;
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(duplicateCount('Indivisibilities'), 2, 'characters may not be adjacent');
