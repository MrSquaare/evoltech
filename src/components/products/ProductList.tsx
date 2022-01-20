import { Grid } from "@mui/material";
import React, { FunctionComponent, useState } from "react";

import { generateProducts } from "../../constants/samples";
import { Product } from "../../models/Product";
import ProductListItem from "./ProductListItem";

interface OwnProps {
  handleAddProduct: (product: Product) => void;
}

type Props = OwnProps;

const ProductList: FunctionComponent<Props> = (props) => {
  const { handleAddProduct } = props;
  const [products] = useState(generateProducts(32));

  return (
    <Grid
      className={"styled-scrollbars"}
      container
      spacing={1}
      sx={{
        height: "500px",
        overflowY: "scroll",
        background: "#EEEEEE",
        borderRadius: "10px 0px 10px 10px",
        padding: "10px",
      }}
    >
      {products.map((product, index) => {
        return (
          <Grid key={product.id} item xs={2}>
            <ProductListItem
              product={product}
              handleAddProduct={handleAddProduct}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
