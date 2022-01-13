import { useCallback, useContext } from "react";

import { ProductRepositoryContext } from "../contexts/ProductRepositoryContext";
import { Product } from "../models/Product";
import { ProductRepository } from "../repositories/product";

type UseFSMReturnType = {
  productRepository: ProductRepository;
  products: Product[];
  scanProduct: () => Product;
  findProduct: (productCode: number) => Product | undefined;
};

export const useProductRepository = (): UseFSMReturnType => {
  const { productRepository } = useContext(ProductRepositoryContext);

  const scanProduct = useCallback(() => {
    return productRepository.scanProduct();
  }, [productRepository]);

  const findProduct = useCallback(
    (productCode: number) => {
      return productRepository.findProduct(productCode);
    },
    [productRepository]
  );

  return {
    productRepository,
    products: productRepository.products,
    scanProduct,
    findProduct,
  };
};
