import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";

import { Product } from "../../models/Product";
import productImg from "./product.jpg";

interface OwnProps {
  product: Product;
}

type Props = OwnProps;

const ProductListItem: FunctionComponent<Props> = (props) => {
  const { product } = props;

  return (
    <Box
      sx={{
        borderRadius: "10px",
        paddingTop: "100%",
        position: "relative",
        "& img": {
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        },
        "& > div": {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      }}
    >
      <div className="content">
        <img src={productImg} alt={"product image"} />
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            borderRadius: "0px 0px 10px 10px",
          }}
        >
          {product.name}
        </Box>
      </div>
    </Box>
  );
};

export default ProductListItem;
