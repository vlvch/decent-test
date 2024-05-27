import axios from "axios";

const getCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
    .then((response) => response.data)
    .catch((e) => {
      console.log(e.message, ', new try');
      return getCountries();
    })
  return response;
}

const getCurrentCountry = async (name) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.data)
    .catch((e) => {
      console.log(e.message, ', new try')
      return getCurrentCountry(name);
    })
  return response;
}

export { getCountries, getCurrentCountry };