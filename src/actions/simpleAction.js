export const simpleAction = (comment) => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result......',
  })
  setTimeout(() => {
      dispatch({
        type: 'SIMPLE_ACTION',
        payload: comment,
      })
  }, 2000);
}