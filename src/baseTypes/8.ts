/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

// const myGender;
type Gender = 'male' | 'female';

// Створюємо змінну myGender типу Gender
const myGender: Gender = 'male';

// Виводимо значення myGender
console.log(`Моя стать: ${myGender}`);


export {};
