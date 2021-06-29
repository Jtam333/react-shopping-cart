import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

export default function ShopItemCard(props) {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <div>Name: {product.name}</div>
      <div>Price: {product.price.toFixed(2)}</div>
      <Button onClick={() => dispatch(addToCart(product))}>Add to cart</Button>
    </div>
  );
}
