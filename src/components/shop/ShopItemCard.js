import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

export default function ShopItemCard(props) {
  const { name, price } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <div>Name: {name}</div>
      <div>Price: {price.toFixed(2)}</div>
      <Button onClick={() => dispatch(addToCart())}>Add to cart</Button>
    </div>
  );
}
