import CloseIcon from "@mui/icons-material/Close";
import { Button, TableCell, TableRow, Typography } from "@mui/material";
import { FC } from "react";

import { ProductCard } from "../../models/ProductCard";

type Props = {
  productCard: ProductCard;
  handleOpen?: (productCard: ProductCard) => void;
};

export const ProductCardListItem: FC<Props> = ({ productCard, handleOpen }) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{productCard.reference.code}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCard.reference.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCard.quantity}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{productCard.getTotalPrice()}</Typography>
      </TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#4B555FC9",
            ":hover": { backgroundColor: "#4B555FC9" },
          }}
          onClick={() => handleOpen && handleOpen(productCard)}
        >
          <CloseIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
