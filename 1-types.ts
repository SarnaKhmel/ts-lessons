// Змінні в TS 
// Загалом в TS статична та сильна типізація (тобто для змінної ми не можемо задавати новий тип) 
// проте це можна обійти використавши any, що задати тип  динамічно (що робити не варто).

// В TS структурна типізація.

// Number 
const numb1: number = 1;  // Явна типізація

// String
const str1: string = "hello"; // Явна типізація

// Boolean
const bool1: boolean = true; // Явна типізація

// Symbol    (Для унікальних та незмінних значень)

// const sym1: symbol = Symbol("key"); // Явна типізація

// Null Undefined
const null1: null = null;
const undefined1: undefined = undefined;

// BigInt   (Великі цілі числа)
//const bigInt1: bigint = 12345678901234567800000n; 

// Void
// Потрібен у випадках якщо ми не повертаємо значень.
const check = (a: number): void => {}

//Never
// Ніколи не повертаємо значень (використовується у функціях з помилками)
const error = (message: string) : never => {
    throw new Error(message);
}

// Unknown 
//(коли не відомий тип даних який ми оримуємо, ПОТРІБНА ПЕРЕВІРКА).
// const unknown1: unknown = await fetch()

// Any
//(коли не відомий тип даних який ми оримуємо, НЕ ПОТРІБНА  ПЕРЕВІРКА).
//const any1: any = await fetch()







const str: string = "hello";
console.log(str);
