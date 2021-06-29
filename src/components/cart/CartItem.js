import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

export default function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <div>Name: {item.name}</div>
      <div>Price: {item.price.toFixed(2)}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Total Price: {item.totalPrice.toFixed(2)}</div>
      <Button onClick={() => dispatch(removeFromCart())}>Remove Item</Button>
    </div>
  );
}
