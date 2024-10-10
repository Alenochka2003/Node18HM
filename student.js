// Создание объекта student
var student = {
    firstName: "Alice",
    lastName: "Johnson",
    grade: 90
};
// Функция для вывода полного имени и оценки студента
function displayStudentInfo(student) {
    console.log("Full Name: ".concat(student.firstName, " ").concat(student.lastName, ", Grade: ").concat(student.grade));
}
displayStudentInfo(student);
