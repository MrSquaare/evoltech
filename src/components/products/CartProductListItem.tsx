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
  onQuantityChange?: (productCart: CartProduct, quantity: number) => void;
  onDelete?: (productCart: CartProduct) => void;
};

export const CartProductListItem: FC<Props> = ({
  productCart,
  onQuantityChange,
  onDelete,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [isQuantityEdited, setIsQuantityEdited] = useState(false);

  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{productCart.reference.code}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCart.reference.name}</Typography>
      </TableCell>
      <TableCell
        onClick={() => setIsQuantityEdited(true)}
        sx={{
          width: "100px",
        }}
      >
        {isQuantityEdited ? (
          <TextField
            variant="outlined"
            value={quantity}
            onChange={(e) => {
              const parsedValue = parseInt(e.target.value || "0");

              if (!parsedValue) return;

              setQuantity(parsedValue);
            }}
            onBlur={(e) => {
              onQuantityChange && onQuantityChange(productCart, quantity);
              setQuantity(0);
              setIsQuantityEdited(false);
            }}
            autoFocus={true}
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
