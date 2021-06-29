import { IconButton, Box } from "@material-ui/core";
import HighlightOff from "@material-ui/icons/HighlightOff";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

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
        <Box fontWeight="fontWeightBold">{item.name}</Box>
        <div>${item.price.toFixed(2)}</div>
        <div>Quantity: {item.quantity}</div>
        <div>Total Price: ${item.totalPrice.toFixed(2)}</div>
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
