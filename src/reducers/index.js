import { combineReducers } from 'redux';
const rats = (state = [], action) => {
  switch (action.type){
    case 'AUTO_RAT':
      return [...state, action.location];
    default:
      return state
  }
};

const panel = (state = [], action) => {
  switch (action.type){
    default:
      return state
  }
};

const rootReducer = combineReducers(
  {
    rats,
    panel
  }
);

export default rootReducer
