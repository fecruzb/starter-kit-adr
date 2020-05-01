import { Box, Grid } from '@material-ui/core'
import Head from 'next/head'

import Left from './views/Left'
import Right from './views/Right'
import UserInput from './views/UserInput'

export default ({ actions, state }) => (
  <Box style={{ height: "100%" }}>
    <Head>
      <title>Home</title>
    </Head>

    <Grid
      container
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Grid item xs={6}>
        <Box width="100%" height="100%" overflow="hidden">
          <Grid container direction="column" style={{ height: "100%" }}>
            <Grid item xs style={{ flex: 1 }}>
              <Left state={state} />
            </Grid>
            <Grid item>
              <UserInput actions={actions} state={state} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Right state={state} />
      </Grid>
    </Grid>
  </Box>
);
