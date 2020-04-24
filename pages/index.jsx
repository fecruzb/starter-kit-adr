import { Grid } from "@material-ui/core";
import BoxLeft from "../components/BoxLeft";
import BoxRight from "../components/BoxRight";
import BoxInputs from "../components/BoxInputs";

export default ({ changeState, state }) => (
  <Grid container style={{ width: "100%" }} spacing={2}>
    <Grid item xs={6}>
      <BoxLeft state={state} />
      <BoxInputs changeState={changeState} />
    </Grid>
    <Grid item xs={6}>
      <BoxRight state={state} />
    </Grid>
  </Grid>
);
