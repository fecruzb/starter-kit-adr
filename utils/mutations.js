const getMutation = ({ type, response, request }) => {
  switch (type) {
    // reducer 1
    case "SEARCH_SELECT":
      return { search: { response, request } };

    // reducer 2
    case "SEARCH_CLEAR":
      return { search: undefined };
  }

  return {};
};

export default (actionsCreator, state, setState) =>
  actionsCreator((action) => {
    const updates = getMutation(action);
    const nextState = { ...state, ...updates };
    setState(nextState);
  });
