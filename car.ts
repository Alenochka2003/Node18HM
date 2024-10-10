// Определение объекта Car с вложенным объектом engine
type Engine = {
    type: string;
    horsepower: number;
};

type Car = {
    make: string;
    model: string;
    engine: Engine;
    year?: number; // Опциональное поле
};

// Создание объекта Car
const car: Car = {
    make: "Toyota",
    model: "Camry",
    engine: {
        type: "V6",
        horsepower: 301
    },
    year: 2020 // Можно не указывать
};

// Функция для вывода информации о машине
function displayCarInfo(car: Car) {
    console.log(`Make: ${car.make}, Model: ${car.model}, Engine: ${car.engine.type} (${car.engine.horsepower} hp)`);
    if (car.year) {
        console.log(`Year: ${car.year}`);
    }
}

displayCarInfo(car);
