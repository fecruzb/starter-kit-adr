import { Box, Button, Grid, TextField } from "@material-ui/core";

export default ({ changeState }) => {
  const [input, setInput] = React.useState({
    field1: "",
  });
  return (
    <Box mt={2} p={2} bgcolor="grey.200">
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
