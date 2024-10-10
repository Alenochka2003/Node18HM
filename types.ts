// Определение типов Admin и User
type Admin = {
    name: string;
    permissions: string[];
};

type User = {
    name: string;
    email: string;
};

// Объединение типов
type AdminUser = Admin & User;

// Создание объекта типа AdminUser
const adminUser: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    permissions: ["read", "write", "delete"]
};

console.log(adminUser);
