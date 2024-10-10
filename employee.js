// Создание массива объектов Employee
var employees = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Doe", salary: 55000 }
];
// Функция для получения зарплат
function getSalaries(employees) {
    return employees.map(function (employee) { return employee.salary; });
}
// Пример использования
var salaries = getSalaries(employees);
console.log("Salaries:", salaries);
