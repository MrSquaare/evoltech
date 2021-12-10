import { Card } from "./models/Card";
import { Product } from "./models/Product";
import { ProductCard } from "./models/ProductCard";
import { ProductRepository } from "./repositories/product";

const sampleCashier = new Cashier();
const sampleProduct1: Product = new Product(
  "id1",
  "Product 1",
  "A product description",
  "123456789",
  10
);
const sampleProduct2: Product = new Product(
  "id2",
  "Product 2",
  "A product description",
  "987654321",
  20
);
const sampleProducts: Product[] = [sampleProduct1, sampleProduct2];

export const scanProductTest = () => {
  const repository = new ProductRepository(sampleProducts);
  const product = repository.scanProduct();

  if (product) {
    console.log("[OK] scanProductTest");
  } else {
    console.log("[KO] scanProductTest");
  }
};

export const findProductTest = () => {
  const repository = new ProductRepository(sampleProducts);
  const product = repository.findProduct(sampleProduct1.code);

  if (product?.id === sampleProduct1.id) {
    console.log("[OK] findProductTest");
  } else {
    console.log("[KO] findProductTest");
  }
};

export const addProductTest = () => {
  const card = new Card();
  const productCard = new ProductCard(sampleProduct1, 1);

  card.addProduct(productCard);

  console.log("[OK] addProductTest");
};

export const updateProductQuantityTest = () => {
  const card = new Card();
  const productCard = new ProductCard(sampleProduct1, 1);
  const quantity = 10;

  card.addProduct(productCard);
  const isSuccess = card.updateProductQuantity(
    productCard.reference.id,
    quantity
  );
  const productCardRef = card.products.get(productCard.reference.id);

  if (isSuccess && productCardRef?.quantity === quantity) {
    console.log("[OK] updateProductQuantityTest");
  } else {
    console.log("[KO] updateProductQuantityTest");
  }
};

export const failUpdateProductQuantityTest = () => {
  const card = new Card();
  const quantity = 10;

  const isSuccess = card.updateProductQuantity(sampleProduct1.id, quantity);

  if (!isSuccess) {
    console.log("[OK] failUpdateProductQuantityTest");
  } else {
    console.log("[KO] failUpdateProductQuantityTest");
  }
};

export const removeProductTest = () => {
  const card = new Card();
  const productCard = new ProductCard(sampleProduct1, 1);

  card.addProduct(productCard);
  const isSuccess = card.removeProduct(productCard.reference.id);

  if (isSuccess) {
    console.log("[OK] removeProductTest");
  } else {
    console.log("[KO] removeProductTest");
  }
};

export const failRemoveProductTest = () => {
  const card = new Card();

  const isSuccess = card.removeProduct(sampleProduct1.id);

  if (!isSuccess) {
    console.log("[OK] failRemoveProductTest");
  } else {
    console.log("[KO] failRemoveProductTest");
  }
};

export const getProductCardTotalPriceTest = () => {
  const productCard = new ProductCard(sampleProduct1, 3);
  const totalPrice = productCard.getTotalPrice();

  if (totalPrice === productCard.reference.price * 3) {
    console.log("[OK] getProductCardTotalPriceTest");
  } else {
    console.log("[KO] getProductCardTotalPriceTest");
  }
};

export const getCardTotalPriceTest = () => {
  const card = new Card();
  const productCard1 = new ProductCard(sampleProduct1, 1);
  const productCard2 = new ProductCard(sampleProduct2, 3);

  card.addProduct(productCard1);
  card.addProduct(productCard2);
  const totalPrice = card.getTotalPrice();

  if (
    totalPrice ===
    productCard1.getTotalPrice() + productCard2.getTotalPrice()
  ) {
    console.log("[OK] getCardTotalPriceTest");
  } else {
    console.log("[KO] getCardTotalPriceTest");
  }
};

export const payAllByCard = () => {
  const logic = new CashierManager(sampleCashier, sampleProducts);
  const paymentMethod = "card";
  const paymentAmount = 100;
  const card = {};

  const isSuccess = logic.pay({
    paymentMethod: paymentMethod,
    amount: paymentAmount,
    card: card,
  });
  const isPayed = logic.isPayed();

  if (isSuccess && isPayed) {
    console.log("[OK] payAllByCard");
  } else {
    console.log("[KO] payAllByCard");
  }
};

export const payAllByCash = () => {
  const logic = new CashierManager(sampleCashier, sampleProducts);
  const paymentMethod = "cash";
  const paymentAmount = 100;
  const cash = {};

  const isSuccess = logic.pay({
    paymentMethod: paymentMethod,
    amount: paymentAmount,
    cash: cash,
  });
  const isPayed = logic.isPayed();

  if (isSuccess && isPayed) {
    console.log("[OK] payAllByCash");
  } else {
    console.log("[KO] payAllByCash");
  }
};

export const payAllByCheck = () => {
  const logic = new CashierManager(sampleCashier, sampleProducts);
  const paymentMethod = "check";
  const paymentAmount = 100;
  const check = {};

  const isSuccess = logic.pay({
    paymentMethod: paymentMethod,
    amount: paymentAmount,
    check: check,
  });
  const isPayed = logic.isPayed();

  if (isSuccess && isPayed) {
    console.log("[OK] payAllByCard");
  } else {
    console.log("[KO] payAllByCard");
  }
};

/*
 * # Scenario 1
 * Scan a product
 * Set quantity
 * Add a product manually
 * Pay a first part by cash
 * Pay the rest by card
 */
export const scenario1Test = () => {
  const logic = new CashierManager(
    sampleCashier,
    sampleCashier,
    sampleProducts
  );
  const product1 = logic.scanProduct();

  if (!product1) {
    return console.log("[KO] scenario1Test");
  }

  const quantity1 = 10;
  const isSuccess1 = logic.addProduct({
    product: product1,
    quantity: quantity1,
  });

  if (!isSuccess1) {
    return console.log("[KO] scenario1Test");
  }

  const productCode = "123456789";
  const product2 = logic.findProduct({ productCode: productCode });

  if (!product2) {
    return console.log("[KO] scenario1Test");
  }

  const isSuccess2 = logic.addProduct({ product: product2 });

  if (!isSuccess2) {
    return console.log("[KO] scenario1Test");
  }

  const paymentMethod1 = "cash";
  const paymentAmount = 20;
  const cash = {};
  const isSuccess3 = logic.pay({
    paymentMethod: paymentMethod1,
    amount: paymentAmount,
    cash: cash,
  });
  let isPayed = logic.isPayed();
  let restAmount = logic.getRestAmount();

  if (!isSuccess3 || isPayed || restAmount !== 30) {
    return console.log("[KO] scenario1Test");
  }

  const paymentMethod2 = "card";
  const card = {};
  isPayed = logic.isPayed();
  restAmount = logic.getRestAmount();

  const isSuccess4 = logic.pay({
    paymentMethod: paymentMethod2,
    amount: restAmount,
    card: card,
  });

  if (isSuccess4 && isPayed && restAmount === 0) {
    console.log("[OK] scenario1Test");
  } else {
    console.log("[KO] scenario1Test");
  }
};
