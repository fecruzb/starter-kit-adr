import axios from 'axios'

const actions = (dispatch) => ({
  search_select: (params) =>
    axios.get("https://randomuser.me/api/", { params }).then((result) =>
      dispatch({
        type: "SEARCH_SELECT",
        request: params,
        response: result.data.results[0],
      })
    ),

  search_clear: () =>
    dispatch({
      type: "SEARCH_CLEAR",
    }),
});

export default actions;
