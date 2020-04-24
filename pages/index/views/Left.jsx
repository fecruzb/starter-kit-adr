import { Box, Typography } from '@material-ui/core'

export default ({ state, changeState }) => (
  <Box padding={3} height="100%">
    {state ? (
      <Box>
        <Typography paragraph color="secondary">
          Input: {state.sent.field1}
        </Typography>
        <Typography>login: {state.received.login.username}</Typography>
        <Typography>username: {state.received.login.password}</Typography>
      </Box>
    ) : (
      <Box>TEXT</Box>
    )}
  </Box>
);
