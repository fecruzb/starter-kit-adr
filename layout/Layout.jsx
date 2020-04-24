import { Grid } from "@material-ui/core";
import Header from "./Header";
import Page from "./Page";

export default ({ children, state }) => (
  <Grid container direction="column" style={{ height: "100%" }}>
    <Grid item>
      <Header state={state} />
    </Grid>

    <Grid item style={{ flexGrow: 1 }}>
      <Page>{children}</Page>
    </Grid>
  </Grid>
);
