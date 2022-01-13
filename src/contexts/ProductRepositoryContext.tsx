import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

import { ProductRepository } from "../repositories/product";

type ProductRepositoryContextValue = {
  productRepository: ProductRepository;
  setProductRepository: Dispatch<SetStateAction<ProductRepository>>;
};

export const ProductRepositoryContext =
  createContext<ProductRepositoryContextValue>(null as any);

type ProductRepositoryProviderProps = {
  productRepository: ProductRepository;
};

export const ProductRepositoryProvider: FC<ProductRepositoryProviderProps> = ({
  children,
  productRepository,
}) => {
  const [state, setState] = useState(productRepository);

  return (
    <ProductRepositoryContext.Provider
      value={{ productRepository: state, setProductRepository: setState }}
    >
      {children}
    </ProductRepositoryContext.Provider>
  );
};
