// Определение интерфейса Person
interface Person {
    firstName: string;
    lastName: string;
}

// Определение интерфейса Student, наследующего Person
interface Student extends Person {
    grade: number;
}

// Создание объекта student
const student: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    grade: 90
};

// Функция для вывода полного имени и оценки студента
function displayStudentInfo(student: Student) {
    console.log(`Full Name: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}

displayStudentInfo(student);
