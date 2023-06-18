const axios = require("axios");
// const fetch = require("node-fetch");
const utils = {
  async get(URL) {
    return await axios.get(URL);
  },
  async fetchCall(url) {
    try {
      const rawResponse = await fetch(url);
      if (rawResponse.status !== 200) {
        throw new Error(`data no encontrada`);
      }
      return rawResponse.json();
    } catch (error) {
      throw error;
    }
  },
};
module.exports = utils;