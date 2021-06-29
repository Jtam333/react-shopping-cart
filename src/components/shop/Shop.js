import products from "../../database/products";
import ShopItemCard from "./ShopItemCard";

export default function Shop() {
  return (
    <div>
      {products.map((product) => (
        <ShopItemCard key={product.name} product={product} />
      ))}
    </div>
  );
}
