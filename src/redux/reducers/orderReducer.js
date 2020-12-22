import { SET_DISH } from "../actions/actionTypes";

const initialState = {
  order: {
    email: "dan",
    orderExist: false,
    dish: {
      idMeal: "",
      strMeal: "",
      strCategory: "",
      strMealThumb: "",
    },
  },
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISH: {
      return {
        ...state,
        order: {
          email: action.payload.email,
          orderExist: action.payload.orderExist,
          dish: action.payload.dish,
        },
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
