import { combineReducers } from 'redux';



const items_reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEMS': {
      const { itemList } = action;
      return [...itemList];
    }
    case 'ADD_ITEM': {
      const { item } = action;
      return [item].concat(state);
    }
    case 'REMOVE_ITEM': {
      const { item } = action;
      return state.filter(el => el._id !== item._id)
    }
    default:
      return state;
  }
};

const item_reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_ITEM': {
      const { item } = action;
      return item;
    }
    default: return state;
  }
}


const reducers = combineReducers({
  items_reducer,
  item_reducer,
});

export default reducers;