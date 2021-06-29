import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.products);

  function ShowCart() {
    return <div>Yay Items!</div>;
  }

  return (
    <div>
      {cartProducts.length > 0 ? (
        <ShowCart />
      ) : (
        <div>There are no items in your cart.</div>
      )}
    </div>
  );
}
