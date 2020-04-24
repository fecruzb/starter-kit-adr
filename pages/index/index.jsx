import { Grid, Box } from "@material-ui/core";
import Head from "next/head";

import { BoxLeft, BoxRight, BoxInputs } from "./components";

export default ({ changeState, state }) => (
  <Box height="100%">
    <Head>
      <title>Home Page</title>
    </Head>

    <Grid container style={{ height: "100%" }}>
      <Grid item xs={6}>
        <Grid container direction="column" style={{ height: "100%" }}>
          <Grid item style={{ flexGrow: 1 }}>
            <BoxLeft state={state} />
          </Grid>
          <Grid item>
            <BoxInputs changeState={changeState} state={state} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <BoxRight state={state} />
      </Grid>
    </Grid>
  </Box>
);
