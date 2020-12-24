import { SET_DISH, CLEAR_ORDER } from "../actions/actionTypes";

export const initialState = {
  order: {
    email: "",
    date: new Date(),
    time: "12:00",
    guests: 1,
    dish: {
      idMeal: "",
      strMeal: "",
      strCategory: "",
      strMealThumb: "",
    },
    drinks: [],
  },
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISH: {
      return {
        ...state,
        order: action.payload,
      };
    }
    case CLEAR_ORDER: {
      return {
        order: {
          email: "",
          date: new Date(),
          time: "12:00",
          guests: 1,
          dish: {
            idMeal: "",
            strMeal: "",
            strCategory: "",
            strMealThumb: "",
          },
          drinks: [],
        },
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
