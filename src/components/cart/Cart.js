import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { selectCart, selectCartTotal } from "./cartSlice";

export default function Cart() {
  const cartItems = useSelector(selectCart);
  const subtotal = useSelector(selectCartTotal);

  function ShowCart() {
    return (
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
        <div>Subtotal: {subtotal.toFixed(2)}</div>
      </div>
    );
  }

  return (
    <div>
      {cartItems.length > 0 ? (
        ShowCart()
      ) : (
        <div>There are no items in your cart.</div>
      )}
    </div>
  );
}
