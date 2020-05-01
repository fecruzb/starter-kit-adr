import axios from 'axios'

const actionsCreator = (dispatch) => ({
  // action 1
  search_select: (params) =>
    axios.get("https://randomuser.me/api/", { params }).then((result) =>
      dispatch({
        type: "SEARCH_SELECT",
        request: params,
        response: result.data.results[0],
      })
    ),

  // action 2
  search_clear: () =>
    dispatch({
      type: "SEARCH_CLEAR",
    }),
});

export default actionsCreator;
