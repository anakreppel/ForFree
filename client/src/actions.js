export const addItems = (itemList) => ({
  type: 'ADD_ITEMS',
  itemList: itemList
});

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item: item
});

export const savedItem = (item) => ({
  type: 'SAVE_ITEM',
  item: item
});

export const deleteItem = (item) => ({
  type: 'REMOVE_ITEM',
  item: item
});

