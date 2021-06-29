import products from "../../database/products";
import ShopItemCard from "./ShopItemCard";
import { Grid, GridList, GridListTile } from "@material-ui/core";

export default function Shop() {
  return (
    // <Grid
    //   container
    //   spacing={3}
    //   direction="column"
    //   // justify="space-evenly"
    //   alignItems="flex-start"
    // >
    //   {products.map((product) => (
    //     <Grid item>
    //       <ShopItemCard key={product.name} product={product} />
    //     </Grid>
    //   ))}
    // </Grid>

    <GridList cols={2} spacing={16} cellHeight="auto">
      {products.map((product) => (
        <GridListTile key={product.name}>
          <ShopItemCard product={product} />
        </GridListTile>
      ))}
    </GridList>
  );
}
