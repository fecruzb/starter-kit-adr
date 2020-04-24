import { Box, Typography } from "@material-ui/core";

export default ({ state, changeState }) => (
  <Box padding={2} height="100%">
    {state ? (
      <Box>
        <Typography>{state.results[0].login.username}</Typography>
        <Typography>{state.results[0].login.password}</Typography>
      </Box>
    ) : (
      <Box>TEXT</Box>
    )}
  </Box>
);
