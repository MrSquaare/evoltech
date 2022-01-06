import { Product } from "../models/Product";

export class ProductRepository {
  constructor(private _products: Product[]) {}

  get products() {
    return this._products;
  }

  findProduct(productCode: string): Product | undefined {
    return this._products.find((product) => product.code === productCode);
  }

  scanProduct() {
    const randomIndex = Math.floor(Math.random() * this._products.length);

    return this._products[randomIndex];
  }
}
