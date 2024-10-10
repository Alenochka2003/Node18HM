// Определение интерфейса Employee
interface Employee {
    name: string;
    salary: number;
}

// Создание массива объектов Employee
const employees: Employee[] = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Doe", salary: 55000 }
];

// Функция для получения зарплат
function getSalaries(employees: Employee[]): number[] {
    return employees.map(employee => employee.salary);
}

// Пример использования
const salaries = getSalaries(employees);
console.log("Salaries:", salaries);
