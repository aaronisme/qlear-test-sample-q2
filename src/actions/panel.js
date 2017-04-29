const moveRat = direction => (dispatch, getState) => {
  const { panel } = getState();
  dispatch({
    type: 'MOVE_RAT',
    direction,
    panel
  })
};

export default moveRat
