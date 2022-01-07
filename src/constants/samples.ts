import { CartProduct } from "../models/CartProduct";
import { Cashier } from "../models/Cashier";
import { Product } from "../models/Product";

export const generateProducts = (quantity: number): Product[] => {
  return Array(quantity)
    .fill(null)
    .map((_, index) => {
      return new Product(
        `${index}`,
        `Product ${index}`,
        `Description of Product ${index}`,
        `${index}`,
        index
      );
    });
};

const generateProductCarts = (
  products: Product[],
  quantity: number
): CartProduct[] => {
  return Array(quantity)
    .fill(null)
    .map((_, index) => {
      return new CartProduct(products[index], index);
    });
};

export const products = generateProducts(8);

export const productCarts = generateProductCarts(products, 8);

export const cashier = new Cashier("John", "Doe");

export const codeCashier = "1567";
