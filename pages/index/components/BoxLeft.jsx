import { Box, Typography } from "@material-ui/core";

export default ({ state, changeState }) => (
  <Box padding={2} height="500px" bgcolor="grey.300">
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
