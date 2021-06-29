import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

export default function ShopItemCard(props) {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {product.name}
        </Typography>

        <div>${product.price.toFixed(2)}</div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          style={{ marginLeft: "auto" }}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
