// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str: string, ending: string): boolean {
  const endLength = ending.length;

  if (endLength !== 0) {
    const substr = str.substring(str.length - endLength);

    if (substr === ending) {
      return true;
    }

    return false;
  }

  return true;
}

console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);
console.log(solution('abc', ''), true);
