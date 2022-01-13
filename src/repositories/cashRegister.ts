import { CashRegister } from "../models/CashRegister";
import { Payment } from "../models/Payment";
import { ProductRepository } from "./product";

export class CashRegisterRepository {
  static loadCashRegister(productRepository: ProductRepository): CashRegister {
    const cashRegister = new CashRegister();
    const key = "cash-register";
    const data = localStorage.getItem(key);

    if (!data) return cashRegister;

    const json = JSON.parse(data);

    cashRegister.currentProductId = json.currentProductId;
    cashRegister.pin = json.pin;

    for (let i = 0; i <= 1; i++) {
      for (const paymentJson of json.orders[i].payments) {
        const payment = new Payment(paymentJson.price);

        cashRegister.currentOrder.addPayment(payment);
      }

      for (const productJson of json.orders[i].cart.products) {
        const productCode = parseInt(productJson.code);

        if (isNaN(productCode)) continue;

        const product = productRepository.findProduct(productCode);

        if (!product) continue;

        cashRegister.currentOrder.cart.addProduct(product);
        cashRegister.currentOrder.cart.updateProductQuantity(
          product.id,
          productJson.quantity
        );
      }

      cashRegister.holdOrder();
    }

    if (json.currentOrderId === 0) {
      cashRegister.resumeOrder();
    }

    return cashRegister;
  }

  static saveCashRegister(cashRegister: CashRegister): void {
    const key = "cash-register";
    const json = cashRegister.toJSON();

    localStorage.setItem(key, JSON.stringify(json));
  }
}
