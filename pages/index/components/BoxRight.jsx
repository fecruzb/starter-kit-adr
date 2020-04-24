import { Box } from "@material-ui/core";

export default ({ state, changeState }) => (
  <Box padding={2} height="500px" bgcolor="grey.300">
    {state ? (
      <Box>
        <img src={state.results[0].picture.large} />
      </Box>
    ) : (
      <Box>PICTURE</Box>
    )}
  </Box>
);
