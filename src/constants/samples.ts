import { Cashier } from "../models/Cashier";
import { Product } from "../models/Product";
import { ProductCard } from "../models/ProductCard";

const product0 = new Product(
  "0",
  "Product 0",
  "Description of Product 0",
  "1234",
  10
);
const product1 = new Product(
  "1",
  "Product 1",
  "Description of Product 1",
  "5678",
  10
);
const product2 = new Product(
  "2",
  "Product 2",
  "Description of Product 2",
  "4321",
  10
);

export const products = [product0, product1, product2];

const productCard0 = new ProductCard(product0, 1);
const productCard1 = new ProductCard(product1, 1);
const productCard2 = new ProductCard(product2, 1);

export const productCards = [productCard0, productCard1, productCard2];

export const cashier = new Cashier("John", "Doe");
