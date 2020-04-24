import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import Link from "next/link";

export default ({ state }) => (
  <AppBar color="primary" position="static">
    <Toolbar>
      <Grid container alignItems="center">
        <Grid item xs>
          {state ? (
            <Typography>
              {state.results[0].name.first} {state.results[0].name.last}
            </Typography>
          ) : (
            <Typography>NAME</Typography>
          )}
        </Grid>

        <Grid item>
          <Box color="white">
            <Link href="/">
              <Button variant="text" color="inherit">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="text" color="inherit">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="text" color="inherit">
                Contact
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);
