import products from "../../database/products";
import ShopItemCard from "./ShopItemCard";
import { GridList, GridListTile } from "@material-ui/core";

/**
 * Component to display the shop
 *
 * @returns Shop component
 */
export default function Shop() {
  return (
    <GridList cols={2} spacing={16} cellHeight="auto">
      {products.map((product) => (
        <GridListTile key={product.name}>
          <ShopItemCard product={product} />
        </GridListTile>
      ))}
    </GridList>
  );
}
