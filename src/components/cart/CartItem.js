export default function CartItem(props) {
  const { item } = props;

  return (
    <div>
      <div>Name: {item.name}</div>
      <div>Price: {item.price.toFixed(2)}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Total Price: {item.totalPrice.toFixed(2)}</div>
    </div>
  );
}
