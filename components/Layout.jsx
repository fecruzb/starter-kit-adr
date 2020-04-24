import { Box, Grid } from "@material-ui/core";
import Page from "./Page";
import Header from "./Header";

export default ({ children, state, changeState }) => (
  <Grid container direction="column" style={{ height: "100%" }}>
    <Grid item>
      <Header state={state} />
    </Grid>
    <Grid item style={{ flexGrow: 1 }}>
      <Page>{children}</Page>
    </Grid>
  </Grid>
);
