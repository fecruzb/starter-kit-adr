import { Box, Grid } from "@material-ui/core";
import { BoxInputs, BoxLeft, BoxRight } from './components';


export default ({ changeState, state }) => (
  <Box style={{ height: "100%" }}>
    <Grid container style={{ width: "100%", height: "100%" }}>
      <Grid item xs={6}>
        <Grid container style={{ width: "100%", height: "100%" }} direction="column">
          <Grid item style={{ flex: 1}}>
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
