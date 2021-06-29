import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  function ShowCart() {
    return (
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
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
