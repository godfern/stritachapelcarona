import axios from 'axios';

// Fetch data from given url
// - Pass request type in options['method']
// - Pass params in options['params']
const fetchJSON = (url, options = {}) => {
  return axios(url, options)
    .then(response => {
      if (!response.status === 200) {
        throw response;
      }
      return response.data;
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      throw error;
    });
};

export { fetchJSON };
