import { Box, Typography } from '@material-ui/core'

export default ({ state, changeState }) => (
  <Box padding={3} height="100%">
    {state.search && (
      <React.Fragment>
        <Typography paragraph color="secondary">
          Input: {state.search.request.field1}
        </Typography>
        <Typography>login: {state.search.response.login.username}</Typography>
        <Typography>
          username: {state.search.response.login.password}
        </Typography>
      </React.Fragment>
    )}
  </Box>
);
