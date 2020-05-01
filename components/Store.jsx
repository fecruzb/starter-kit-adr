import React from 'react'

import actions from '../utils/actions'
import mutations from '../utils/mutations'
import Layout from './Layout'

export default ({ Component, pageProps }) => {
  const [state, setState] = React.useState({});
  const mutatedActions = mutations(actions, state, setState);
  return (
    <Layout state={state}>
      <Component {...pageProps} actions={mutatedActions} state={state} />
    </Layout>
  );
};
