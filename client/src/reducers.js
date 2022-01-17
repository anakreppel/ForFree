import { combineReducers } from 'redux';

const items_reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEMS': {
      const { items } = action;
      return items.concat(state);
    }
    case 'ADD_ITEM': {
      const { item } = action;
      return [item].concat(state);
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  items_reducer,
});

export default reducers;