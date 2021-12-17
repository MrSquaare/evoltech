import { Cashier } from "../models/Cashier";
import { Product } from "../models/Product";
import { ProductCard } from "../models/ProductCard";

const generateProducts = (quantity: number): Product[] => {
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

const generateProductCards = (
  products: Product[],
  quantity: number
): ProductCard[] => {
  return Array(quantity)
    .fill(null)
    .map((_, index) => {
      return new ProductCard(products[index], index);
    });
};

export const products = generateProducts(8);

export const productCards = generateProductCards(products, 8);

export const cashier = new Cashier("John", "Doe");
