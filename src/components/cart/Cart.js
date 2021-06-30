import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { selectCart, selectCartTotal } from "./cartSlice";
import { Box, Divider } from "@material-ui/core";

/**
 * Component to display shopping cart
 *
 * @returns Cart component
 */
export default function Cart() {
  const cartItems = useSelector(selectCart);
  const subtotal = useSelector(selectCartTotal);

  function Subtotal() {
    return (
      <Box textAlign="right" fontWeight="fontWeightBold" fontSize="h6.fontSize">
        Subtotal: ${subtotal.toFixed(2)}
      </Box>
    );
  }

  /**
   * Renders HTML for shopping cart if there are items in the cart.
   *
   * @returns HTML for cart display
   */
  function ShowCart() {
    return (
      <div>
        {cartItems.map((item) => (
          <>
            <CartItem key={item.name} item={item} />
            <Divider />
          </>
        ))}
        <Subtotal />
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
