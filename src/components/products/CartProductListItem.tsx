import CloseIcon from "@mui/icons-material/Close";
import { Button, TableCell, TableRow, Typography } from "@mui/material";
import { FC } from "react";

import { CartProduct } from "../../models/CartProduct";

type Props = {
  productCart: CartProduct;
  onDelete?: (productCart: CartProduct) => void;
};

export const CartProductListItem: FC<Props> = ({ productCart, onDelete }) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{productCart.reference.code}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCart.reference.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCart.quantity}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCart.getTotalPrice()}</Typography>
      </TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#4B555FC9",
            ":hover": { backgroundColor: "#4B555FC9" },
          }}
          onClick={() => onDelete && onDelete(productCart)}
        >
          <CloseIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
