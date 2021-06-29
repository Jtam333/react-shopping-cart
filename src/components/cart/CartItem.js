export default function CartItem(props) {
  const { item } = props;

  function showTotalPrice() {
    return (item.price * item.quantity).toFixed(2);
  }

  return (
    <div>
      <div>Name: {item.name}</div>
      <div>Price: {item.price.toFixed(2)}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Total Price: {showTotalPrice()}</div>
    </div>
  );
}
