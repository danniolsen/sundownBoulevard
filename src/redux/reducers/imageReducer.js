const initialState = {
  images: [
    {
      original:
        "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
    },
    { original: "https://www.themealdb.com/images/media/meals/1529446352.jpg" },
    {
      original:
        "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    },
  ],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_IMAGES": {
      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};

export default imageReducer;
