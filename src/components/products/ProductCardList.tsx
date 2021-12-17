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

import { ProductCard } from "../../models/ProductCard";
import { ProductCardListItem } from "./ProductCardListItem";

type Props = {
  productCards: ProductCard[];
  onDelete?: (productCard: ProductCard) => void;
};

export const ProductCardList: FC<Props> = ({ productCards, onDelete }) => {
  return (
    <TableContainer component={Paper}>
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
                onDelete={onDelete}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
