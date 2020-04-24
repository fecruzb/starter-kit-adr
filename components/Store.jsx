import React from "react";
import Layout from "../components/Layout";

export default function Store({ Component, pageProps }) {
  const [state, setState] = React.useState(null);

  const changeState = (state) => {
    if (state) {
      fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((result) => {
          setState(result);
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
