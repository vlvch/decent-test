import axios from "axios";

const getCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
    .then((response) => response.data)
    .catch((e) => {
      console.log(e.message, 'new try');
      return setTimeout(getCountries, 1000);
    })
  return response;
}

const getCurrentCountry = async (name) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.data)
    .catch((e) => {
      console.log(e.message, 'new try')
      return setTimeout(getCurrentCountry(name), 1000);
    })
  return response;
}

export { getCountries, getCurrentCountry };