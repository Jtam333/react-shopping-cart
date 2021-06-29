import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  function ShowCart() {
    return <div>Yay Items!</div>;
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
