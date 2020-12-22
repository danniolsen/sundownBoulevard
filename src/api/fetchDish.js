import axios from "axios";

const fetchDish = async () => {
  const URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchDish;
