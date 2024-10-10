// Функция для расчета скидки
function calculateDiscount(product, discount) {
    return product.price - (product.price * (discount / 100));
}
// Пример использования
var product = {
    name: "Laptop",
    price: 1000
};
var discountedPrice = calculateDiscount(product, 10); // Скидка 10%
console.log("New price for ".concat(product.name, ": $").concat(discountedPrice));
