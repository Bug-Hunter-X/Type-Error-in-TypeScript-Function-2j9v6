function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(5, 10); // Correct
const result2 = add(5, parseInt('10', 10)); // Correct with type conversion

console.log(result1); // Output: 15
console.log(result2); // Output: 15