// Создание объекта Car
var car = {
    make: "Toyota",
    model: "Camry",
    engine: {
        type: "V6",
        horsepower: 301
    },
    year: 2020 // Можно не указывать
};
// Функция для вывода информации о машине
function displayCarInfo(car) {
    console.log("Make: ".concat(car.make, ", Model: ").concat(car.model, ", Engine: ").concat(car.engine.type, " (").concat(car.engine.horsepower, " hp)"));
    if (car.year) {
        console.log("Year: ".concat(car.year));
    }
}
displayCarInfo(car);
