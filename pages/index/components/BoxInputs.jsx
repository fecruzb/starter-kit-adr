import { Box, Button, Grid, TextField } from "@material-ui/core";

export default ({ changeState, state }) => {
  const [input, setInput] = React.useState({
    field1: "",
  });
  return (
    <Box marginTop={2} padding={2} bgcolor="grey.200">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs>
          <TextField
            fullWidth
            name="field1"
            variant="outlined"
            value={input.field1}
            onChange={(event) =>
              setInput({ ...input, field1: event.target.value })
            }
          />
        </Grid>
        <Grid item>
          <Button
            disabled={!state}
            color="secondary"
            variant="contained"
            onClick={() => {
              setInput({
                field1: "",
              });
              changeState(null);
            }}
          >
            CLEAR
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => changeState(input)}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
