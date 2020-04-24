import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import Link from 'next/link'

export default ({ state }) => (
  <AppBar color="primary" position="static">
    <Toolbar>
      <Grid container alignItems="center">
        {/* dynamic part - based on the state */}
        <Grid item xs>
          {state ? (
            <Typography>
              {state.received.name.first} {state.received.name.last}
            </Typography>
          ) : (
            <Typography>NAME</Typography>
          )}
        </Grid>

        {/* static links */}
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
