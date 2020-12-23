const initialState = {
  orderlist: [],
};

const allOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER": {
      return {
        ...state,
        orderList: action.payload.orderList,
      };
    }
    default:
      return state;
  }
};

export default allOrdersReducer;
