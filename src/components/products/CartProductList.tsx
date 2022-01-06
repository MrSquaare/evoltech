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
import { FC, useState } from "react";

import { CartProduct } from "../../models/CartProduct";
import ProductDeleteModal from "../cashier/ProductDeleteModal";
import { CartProductListItem } from "./CartProductListItem";

type Props = {
  productCarts: CartProduct[];
  onDelete?: (productCart: CartProduct) => void;
  onQuantityChange: (productCart: CartProduct, quantity: number) => void;
};

export const CartProductList: FC<Props> = ({
  productCarts,
  onDelete,
  onQuantityChange,
}) => {
  const [modalProperties, setModalProperties] = useState<{
    visible: boolean;
    cartProduct: CartProduct | undefined;
  }>({
    visible: false,
    cartProduct: undefined,
  });

  const handleOpen = (cartProduct: CartProduct) => {
    setModalProperties({ visible: true, cartProduct });
  };
  const handleClose = () => {
    setModalProperties({ visible: false, cartProduct: undefined });
  };

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
                  handleOpen={handleOpen}
                  onQuantityChange={onQuantityChange}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ProductDeleteModal
        modalProperties={modalProperties}
        handleClose={handleClose}
        onDelete={onDelete}
      />
    </Paper>
  );
};
