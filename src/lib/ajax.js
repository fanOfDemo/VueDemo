import axios from 'axios';

axios.defaults.withCredentials = true;
const header = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Cache-Control': 'max-age=0',
  'Connection': 'keep-alive',
  'Host': 'lf.snssdk.com',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
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
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safar'
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
    const result = axios.get(getAjaxUrl(options), options.params);
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
