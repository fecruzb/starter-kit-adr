import { Box, Button, Grid, TextField } from '@material-ui/core'

export default ({ actions, state }) => {
  // Parecido com a store, mas restrito apenas a este componente
  // E aos componentes filhos também
  const [input, setInput] = React.useState({
    field1: state.search ? state.search.request.field1 : "",
  });

  return (
    <Box padding={2} borderTop={1} borderColor="grey.100">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs>
          <TextField
            fullWidth
            disabled={!!state.search}
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
            disabled={!state.search}
            color="secondary"
            variant="contained"
            onClick={() => {
              setInput({
                field1: "",
              });

              actions.search_clear();
            }}
          >
            CLEAR
          </Button>
        </Grid>

        <Grid item>
          <Button
            disabled={!input.field1 || !!state.search}
            color="primary"
            variant="contained"
            onClick={() => actions.search_select(input)}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
