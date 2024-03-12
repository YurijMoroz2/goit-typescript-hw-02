/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY;
}

// Приклад використання
console.log(isWeekend(DayOfWeek.SATURDAY));  // True
console.log(isWeekend(DayOfWeek.WEDNESDAY));  // False
