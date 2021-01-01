import axios from 'axios';

export const api = {
  async get(url) {
    return await axios({
      method: 'get',
      url,
    });
  },
  async post(url, data) {
    return await axios({
      method: 'post',
      url,
      data,
    });
  },
  async put(url, data) {
    return await axios({
      method: 'put',
      url,
      data,
    });
  },
  async delete(url) {
    return await axios({
      method: 'delete',
      url,
    });
  },
};
