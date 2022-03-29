import axios from 'axios';

const urlParam = window.location.hash.slice(2);
const BASE_URL = `https://${urlParam}`;

export const getFilteredCards = async (filters) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/metadata/filter`, filters)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(e.message);
      });
  });
};
