const getMutation = ({ type, response, request }) => {
  switch (type) {
    case "SEARCH_SELECT":
      return { search: { response, request } };

    case "SEARCH_CLEAR":
      return { search: undefined };
  }

  return {};
};

export default (actions, state, setState) =>
  actions((action) => {
    const updates = getMutation(action);
    const nextState = { ...state, ...updates };
    setState(nextState);
  });
