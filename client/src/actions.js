
export const addItems = (items) => ({
  type: 'ADD_ITEMS',
  items: items
});

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item: item
});

export const filterItems = (item) => ({
  type: 'FILTER_ITEMS_LIST',
  item: item
});