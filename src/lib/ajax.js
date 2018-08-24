import axios from 'axios';

axios.defaults.withCredentials = true;
const header = {
  'Content-Type': 'application/json;charset=UTF-8',
};

/**
 * @param  {[type]} options []
 * options.url
 * options.params
 * options.success
 * options.error
 * @return {[type]}[description]
 */
const headers = {
  'Content-Type': 'application/json;charset=UTF-8',
};

/**
 * [getAjaxUrl description]
 * @param  {[type]} url       [description]
 * @return {[type]}           [description]
 */
function getAjaxUrl(options) {
  return options.url;
}

function dealResponse(result, options) {
  result.then((response) => {
      if (response && response.data) {
        if (options.success) {
          options.success(response.data);
        }
      } else if (options.error) {
        options.error(response);
      }
    })
    .catch((error) => {
      if (options.error) {
        options.error(error);
      }
    });
}

const Ajax = {
  // apiConfig: API,
  get(options) {
    const result = axios.get(getAjaxUrl(options), {
      params: options.params,
    });
    dealResponse(result, options);
  },

  post(options) {
    const result = axios.post(getAjaxUrl(options), options.params, {
      headers: header,
    });
    dealResponse(result, options);
  },

  delete(options) {
    const result = axios.delete(getAjaxUrl(options), {
      params: options.params,
    });
    dealResponse(result, options);
  },

  put(options) {
    const result = axios.put(getAjaxUrl(options), options.params, {
      headers,
    });
    dealResponse(result, options);
  },
};

export default Ajax;
