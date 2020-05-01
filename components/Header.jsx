import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import Link from 'next/link'
import { withRouter } from 'next/router'

export default withRouter(({ state, router, actions }) => {
  const getHeaderContent = () => {
    switch (router.pathname) {
      case "/search":
        return (
          <Grid item xs>
            {state.search ? (
              <Typography>
                {state.search.response.name.first}{" "}
                {state.search.response.name.last}
              </Typography>
            ) : (
              <Typography>SEARCH: NONE SELECTED</Typography>
            )}
          </Grid>
        );
      default:
        return (
          <Grid item xs>
            <Typography>NORMAL HEADER</Typography>
          </Grid>
        );
    }
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Grid container alignItems="center">
          {/* dynamic part of the fixed header - based on page route*/}
          {getHeaderContent()}

          {/* static links */}
          <Grid item>
            <Box color="white">
              <Link href="/">
                <Button variant="text" color="inherit">
                  Home
                </Button>
              </Link>

              <Link href="/select">
                <Button variant="text" color="inherit">
                  Select
                </Button>
              </Link>

              <Link href="/location">
                <Button variant="text" color="inherit" disabled={!state.search}>
                  Location
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
});
