import { Box, Button, Grid, TextField } from '@material-ui/core'

export default ({ changeState, state }) => {
  const [input, setInput] = React.useState({
    field1: state && state.sent ? state.sent.field1 : "",
  });

  return (
    <Box padding={2} borderTop={1} borderColor="grey.100">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs>
          <TextField
            fullWidth
            disabled={!!state}
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
            disabled={!input.field1 || state}
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
