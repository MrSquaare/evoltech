import { Product } from "./Product";
import { ProductCard } from "./ProductCard";

export class Card {
  private _products: Map<string, ProductCard> = new Map();

  get products(): Map<string, ProductCard> {
    return this._products;
  }

  addProduct(product: Product): void {
    const productCard = new ProductCard(product, 1);

    this._products.set(productCard.reference.id, productCard);
  }

  updateProductQuantity(productId: string, quantity: number): boolean {
    const product = this._products.get(productId);

    if (!product) return false;

    product.quantity = quantity;

    this._products.set(product.reference.id, product);

    return true;
  }

  removeProduct(productId: string): boolean {
    return this._products.delete(productId);
  }

  getTotalPrice(): number {
    const productArr = Array.from(this._products.values());

    return productArr.reduce((total, product) => {
      return total + product.getTotalPrice();
    }, 0);
  }
}
