// Змінні в TS 
// Загалом в TS статична та сильна типізація (тобто для змінної ми не можемо задавати новий тип) 
// проте це можна обійти використавши any, що задати тип  динамічно (що робити не варто).
// В TS структурна типізація.
// Number 
var numb1 = 1; // Явна типізація
// String
var str1 = "hello"; // Явна типізація
// Boolean
var bool1 = true; // Явна типізація
// Symbol    (Для унікальних та незмінних значень)
// const sym1: symbol = Symbol("key"); // Явна типізація
// Null Undefined
var null1 = null;
var undefined1 = undefined;
// BigInt   (Великі цілі числа)
//const bigInt1: bigint = 12345678901234567800000n; 
// Void
// Потрібен у випадках якщо ми не повертаємо значень.
var check = function (a) { };
//Never
// Ніколи не повертаємо значень (використовується у функціях з помилками)
var error = function (message) {
    throw new Error(message);
};
// Unknown 
//(коли не відомий тип даних який ми оримуємо, ПОТРІБНА ПЕРЕВІРКА).
// const unknown1: unknown = await fetch()
// Any
//(коли не відомий тип даних який ми оримуємо, НЕ ПОТРІБНА  ПЕРЕВІРКА).
//const any1: any = await fetch()
var str = "hello";
console.log(str);
