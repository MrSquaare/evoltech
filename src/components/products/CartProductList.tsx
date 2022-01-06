import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";

import { CartProduct } from "../../models/CartProduct";
import { CartProductListItem } from "./CartProductListItem";

type Props = {
  productCarts: CartProduct[];
  onDelete?: (productCart: CartProduct) => void;
};

export const CartProductList: FC<Props> = ({ productCarts, onDelete }) => {
  return (
    <Paper sx={{ height: "720px", overflowX: "auto" }}>
      <TableContainer>
        <Table>
          <TableHead
            sx={{
              backgroundColor: "#4B555FC9",
            }}
          >
            <TableRow>
              <TableCell>
                <Typography variant="h6" component="h2" color="white">
                  Référence
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="h2" color="white">
                  Nom
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="h2" color="white">
                  Qté
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="h2" color="white">
                  Prix
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {productCarts.map((productCart) => {
              return (
                <CartProductListItem
                  key={productCart.reference.id}
                  productCart={productCart}
                  onDelete={onDelete}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
