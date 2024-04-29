export interface ShoppingItem {
  id: string;
  name: string;
}

const shoppingList: ShoppingItem[] = [];

const addItem = (newItem: ShoppingItem) => {
  shoppingList.push(newItem);
  return newItem;
};

const readItems = () => {
  return shoppingList;
};

const updateItem = (id: string, editName: string) => {
  return shoppingList.find((item) => {
    if (item.id === id) {
      editName ? (item.name = editName) : item.name;
    }
  });
};

export { addItem, readItems, updateItem };
