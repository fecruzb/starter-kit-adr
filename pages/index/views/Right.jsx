import { Box } from '@material-ui/core'

export default ({ state, changeState }) => (
  <Box padding={3} height="100%" borderLeft={1} borderColor="grey.100">
    {state ? (
      <Box>
        <img src={state.received.picture.large} />
      </Box>
    ) : (
      <Box>PICTURE</Box>
    )}
  </Box>
);
