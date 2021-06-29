import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import { Box, Grid, Divider, Typography } from "@material-ui/core";

function App() {
  return (
    <Box p={2}>
      <Typography>
        <Grid className="App" container spacing={3}>
          <Grid item sm>
            <Shop />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item sm>
            <Cart />
          </Grid>
        </Grid>
      </Typography>
    </Box>
  );
}

export default App;
