import { selectedproducts } from "../action/Action";

export const selectitemreducer = (state = [], { type, payload }) => {
  switch (type) {
    case "SELECTED_PRODUCT":
      return [(state = payload)];
    default:
      return state;
  }
};

export const addToCartItem = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return [...state, payload];

    case "SPECIFIC_ITEM_COUNT":
      return state.map((item) =>
        item.id === payload.id ? { ...item, count: payload.count } : item
      );

    default:
      return state;
  }
};


export const addItemCount = (state = 0, { type, payload }) => {
  switch (type) {
    case "HANDLE_ITEM_COUNT":
      return state + 1;
    default:
      return state;
  }
};

export const itemDisplayStatusReducer = (state = false, { type, payload }) => {
  switch (type) {
    case "ITEM_DISPLAY_STATUS":
      return (state = payload);
    default:
      return state;
  }
};

export const handleItemSpecificCountReducer = (
  state = [], 
  { type, payload }
) => {
  switch (type) {
      case "SPECIFIC_ITEM_COUNT":
          return state.map((item) =>
              item.id === payload.id ? { ...item, count: payload.count } : item
          );
      default:
          return state;
  }
};

export const handleSearchItemFromReducer =(state="",{type,payload})=>{
switch(type){
  case "SEARCH_ITEM":
    return state = payload;
    case "CLEAR_SEARCH_ITEM":
      return state = null;
    default :
    return state;
}
}