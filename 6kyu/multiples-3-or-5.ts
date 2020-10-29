export class Challenge {
  static solution(num: number) {
    console.log(num);
    let arrayOfNumbers = [];

    for (let i = 0; i < num; i++) {
      if (i + 1 !== num) {
        arrayOfNumbers.push(i + 1);
      }
    }

    const filteredNumbers = arrayOfNumbers.filter((num) => num % 3 === 0 || num % 5 === 0);
    return filteredNumbers.reduce((acc, value) => acc + value, 0);
  }
}

console.log(Challenge.solution(10), 23);
