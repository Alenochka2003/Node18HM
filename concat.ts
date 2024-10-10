// Интерфейс для функции concatStrings
interface ConcatStrings {
    str1: string;
    str2: string;
}

// Функция для объединения строк
function concatStrings({ str1, str2 }: ConcatStrings): string {
    return str1 + str2;
}

// Пример использования
const result = concatStrings({ str1: "Hello, ", str2: "world!" });
console.log(result);
