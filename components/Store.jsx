import axios from 'axios'
import React from 'react'

import Layout from './Layout'

export default function Store({ Component, pageProps }) {
  const [state, setState] = React.useState(null);

  const changeState = (state) => {
    if (state) {
      axios
        .get("https://randomuser.me/api/", { params: state })
        .then((result) => {
          setState({
            sent: state,
            received: result.data.results[0],
          });
        });
    } else {
      setState(null);
    }
  };

  return (
    <Layout changeState={changeState} state={state}>
      <Component {...pageProps} changeState={changeState} state={state} />
    </Layout>
  );
}
