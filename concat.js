// Функция для объединения строк
function concatStrings(_a) {
    var str1 = _a.str1, str2 = _a.str2;
    return str1 + str2;
}
// Пример использования
var result = concatStrings({ str1: "Hello, ", str2: "world!" });
console.log(result);
