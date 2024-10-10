// Определение интерфейса Product
interface Product {
    name: string;
    price: number;
}

// Функция для расчета скидки
function calculateDiscount(product: Product, discount: number): number {
    return product.price - (product.price * (discount / 100));
}

// Пример использования
const product: Product = {
    name: "Laptop",
    price: 1000
};

const discountedPrice = calculateDiscount(product, 10); // Скидка 10%
console.log(`New price for ${product.name}: $${discountedPrice}`);
