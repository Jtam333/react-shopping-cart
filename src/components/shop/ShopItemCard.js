import { Button } from "@material-ui/core";

export default function ShopItemCard(props) {
  const {name, price} = props;

  return (
    <div>
      <div>Name: {name}</div>
      <div>Price: {price.toFixed(2)}</div>
      <Button>Add to cart</Button>
    </div>
  );
}
