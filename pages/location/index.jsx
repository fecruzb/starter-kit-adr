import { Box, Typography } from '@material-ui/core'
import Head from 'next/head'

export default ({ state }) => (
  <Box padding={3}>
    <Head>
      <title>Location</title>
    </Head>{" "}
    {console.log(state)}
    <Typography variant="h5" paragraph>
      Location
    </Typography>
    {state.search && (
      <Box>
        <Typography>City: {state.search.response.location.city}</Typography>
        <Typography>State: {state.search.response.location.state}</Typography>
        <Typography>
          Country: {state.search.response.location.country}
        </Typography>
        <Typography>
          Address: {state.search.response.location.street.name}{" "}
          {state.search.response.location.street.number}
        </Typography>
      </Box>
    )}
  </Box>
);
