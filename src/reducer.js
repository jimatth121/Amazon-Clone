// import {useStateValue} from

export const initialState = {
  basket: [
   
  ],
};

function reducer(state, action) {
  console.log(state.basket);
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // logic to remove item from basket
      const newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (itemIndex) => itemIndex.id === action.payload
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("This index does not exist in the array of basket");
      }
      return {
        ...state,
        basket: newBasket,
      };
      break;
    default:
      return state;
  }
}

export default reducer;
