import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useMemo } from "react";

import { useCashRegister } from "../../hooks/useCashRegister";
import { CartProduct } from "../../models/CartProduct";

type Props = {
  productCart: CartProduct;
  onDelete?: (productCart: CartProduct) => void;
};

export const CartProductListItem: FC<Props> = ({ productCart, onDelete }) => {
  const { cashRegister, handleSetCurrentProductId } = useCashRegister();
  const currentQuantity = useMemo(() => {
    if (!cashRegister.currentProductId) return productCart.quantity;

    const pin = parseInt(cashRegister.pin);

    if (isNaN(pin)) return productCart.quantity;

    return pin;
  }, [cashRegister, productCart]);

  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{productCart.reference.code}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCart.reference.name}</Typography>
      </TableCell>
      <TableCell
        onClick={() => handleSetCurrentProductId(productCart.reference.id)}
        sx={{
          width: "100px",
        }}
      >
        {cashRegister.currentProductId === productCart.reference.id ? (
          <TextField
            variant="outlined"
            value={currentQuantity}
            focused={true}
            size={"small"}
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
          onClick={() => onDelete && onDelete(productCart)}
        >
          <CloseIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
