import React from 'react'

import actionsCreator from '../utils/actions'
import mutations from '../utils/mutations'
import Layout from './Layout'

export default ({ Component, pageProps }) => {
  const [state, setState] = React.useState({});
  const mutatedActions = mutations(actionsCreator, state, setState);
  return (
    <Layout state={state} actions={mutatedActions}>
      <Component {...pageProps} actions={mutatedActions} state={state} />
    </Layout>
  );
};
