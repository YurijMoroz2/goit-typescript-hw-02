// /*
//   Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
// */

// function showMessage(message) {
//   console.log(message);
// }

// function calc(num1, num2) {
//   return num1 + num2;
// }

// function customError() {
//   throw new Error('Error');
// }
function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(message: string): never {
  throw new Error(message);
}

export {};