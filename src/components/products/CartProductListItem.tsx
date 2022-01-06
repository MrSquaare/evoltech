import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

import { CartProduct } from "../../models/CartProduct";

type Props = {
  productCart: CartProduct;
  handleOpen?: (productCart: CartProduct) => void;
  onQuantityChange: (productCart: CartProduct, quantity: number) => void;
};

export const CartProductListItem: FC<Props> = ({
  productCart,
  handleOpen,
  onQuantityChange,
}) => {
  const [isQuantityEdited, setIsQuantityEdited] = useState(false);

  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{productCart.reference.code}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCart.reference.name}</Typography>
      </TableCell>
      <TableCell onClick={() => setIsQuantityEdited(true)}>
        {isQuantityEdited ? (
          <TextField
            value={productCart.quantity}
            variant="outlined"
            onChange={(e) =>
              onQuantityChange(productCart, parseInt(e.target.value) || 0)
            }
            onBlur={() => setIsQuantityEdited(false)}
          />
        ) : (
          <Typography variant="body1">{productCart.quantity}</Typography>
        )}
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
          onClick={() => handleOpen && handleOpen(productCart)}
        >
          <CloseIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
