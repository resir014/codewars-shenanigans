export function pyramid(n: number) {
  if (n <= 0) {
    return [];
  }

  let outer: number[][] = [];

  for (let i = 1; i <= n; i++) {
    outer.push(Array(i).fill(1));
  }

  return outer;
}

console.log(`pyramid(0)`, pyramid(0));
console.log(`pyramid(1)`, pyramid(1));
console.log(`pyramid(2)`, pyramid(2));
console.log(`pyramid(3)`, pyramid(3));
