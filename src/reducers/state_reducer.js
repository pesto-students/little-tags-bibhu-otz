import { USERACTIONS } from "../actions";


export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case USERACTIONS.ADD_TO_BASKET:
      const addIndex = state?.basket?.findIndex(
        (basketItems) => basketItems.id === action.item.id
      );
      let addNewBasket = [...state.basket];
      if (addIndex >= 0) {
        addNewBasket.splice(addIndex, 0, action.item);
        return {
          ...state,
          basket: addNewBasket,
        };
      }
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case USERACTIONS.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItems) => basketItems.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove product");
      }
      return { ...state, basket: newBasket };

    case USERACTIONS.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;