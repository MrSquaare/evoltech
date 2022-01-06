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

import { ProductCard } from "../../models/ProductCard";
import ProductDeleteModal from "../cashier/ProductDeleteModal";
import { ProductCardListItem } from "./ProductCardListItem";

type Props = {
  productCards: ProductCard[];
  onDelete?: (productCard: ProductCard) => void;
};

export const ProductCardList: FC<Props> = ({ productCards, onDelete }) => {

  const [modalProperties, setModalProperties] = useState<{
    visible: boolean;
    productCard: ProductCard | undefined;
  }>({
    visible: false,
    productCard: undefined,
  });

  const handleOpen = (productCard: ProductCard) => {
    setModalProperties({ visible: true, productCard });
  };
  const handleClose = () => {
    setModalProperties({ visible: false, productCard: undefined });
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
            {productCards.map((productCard) => {
              return (
                <ProductCardListItem
                  key={productCard.reference.id}
                  productCard={productCard}
                  handleOpen={handleOpen}
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
