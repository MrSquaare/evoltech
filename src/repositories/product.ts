import { Product } from "../models/Product";

export class ProductRepository {
  private static instance: ProductRepository;

  public static getInstance(products: Product[]): ProductRepository {
    if (!ProductRepository.instance) {
      ProductRepository.instance = new ProductRepository(products);
    }

    return ProductRepository.instance;
  }

  private constructor(private _products: Product[]) {}

  get products() {
    return this._products;
  }

  findProduct(productCode: number): Product | undefined {
    return this._products.find(
      (product) => parseInt(product.code) === productCode
    );
  }

  scanProduct() {
    const randomIndex = Math.floor(Math.random() * this._products.length);

    return this._products[randomIndex];
  }
}
