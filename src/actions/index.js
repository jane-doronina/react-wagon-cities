import cities from "../data/cities";

export const setCities = () => {
  return {
    type: "SET_CITIES",
    payload: cities
  }
}

export const selectCity = (city) => {
  return {
    type: "SELECT_CITY",
    payload: city
  }
}
