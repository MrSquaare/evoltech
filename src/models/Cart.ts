import { CartProduct } from "./CartProduct";
import { Product } from "./Product";

export class Cart {
  private _products: Map<string, CartProduct> = new Map();

  get products(): Map<string, CartProduct> {
    return this._products;
  }

  addProduct(product: Product): void {
    const quantity = (this._products.get(product.id)?.quantity || 0) + 1;
    const productCart = new CartProduct(product, quantity);

    this._products.set(productCart.reference.id, productCart);
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

  toJSON() {
    const productArr = Array.from(this._products.values());

    return {
      products: productArr.map((product) => product.toJSON()),
    };
  }
}
