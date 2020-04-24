import { Grid } from '@material-ui/core'

import Header from './Header'
import Page from './Page'

export default ({ children, state }) => (
  <Grid
    container
    direction="column"
    wrap="nowrap"
    style={{ height: "100%", width: "100%" }}
  >
    <Grid item>
      <Header state={state} />
    </Grid>

    <Grid item xs style={{ flexGrow: 1, width: "100%" }}>
      <Page>{children}</Page>
    </Grid>
  </Grid>
);
