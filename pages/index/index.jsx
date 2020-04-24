import { Grid, Box } from "@material-ui/core";

import { BoxLeft, BoxRight, BoxInputs } from './components'

export default ({ changeState, state }) => (
  <Box>
    <Grid container style={{ width: "100%" }} spacing={2}>
      <Grid item xs={6}>
        <BoxLeft state={state} />
        <BoxInputs changeState={changeState} state={state} />
      </Grid>
      <Grid item xs={6}>
        <BoxRight state={state} />
      </Grid>
    </Grid>
  </Box>
);
