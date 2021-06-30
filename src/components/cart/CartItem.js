import { IconButton, Box, Typography } from "@material-ui/core";
import HighlightOff from "@material-ui/icons/HighlightOff";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

/**
 * Component for a unique item in shopping cart
 *
 * @param {*} props contains cart item object. E.g. {name: "a", price: 10, quantity: 1, totalPrice: 10}
 * @returns CartItem component
 */
export default function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <Box
      p={2}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box>
        <Typography style={{ fontWeight: 600 }}>{item.name}</Typography>
        <div>${item.price.toFixed(2)}</div>
        <div>Quantity: {item.quantity}</div>
        <div>Total: ${item.totalPrice.toFixed(2)}</div>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton
          aria-label="delete"
          size="small"
          style={{ marginLeft: "auto" }}
          onClick={() => dispatch(removeFromCart(item))}
        >
          <HighlightOff fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
