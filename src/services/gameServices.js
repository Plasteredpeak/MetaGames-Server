require("dotenv").config();

const axios = require("axios");

const rawgApiKey = process.env.RAWG_API_KEY;

const baseUrl = "https://api.rawg.io/api";

exports.getGames = async (queryParams) => {
  try {
    const response = await axios.get(`${baseUrl}/games?key=${rawgApiKey}`, {
      headers: {
        "content-type": "application/json",
      },
      params: {
        ...queryParams,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

exports.getGameById = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}/games/${id}?key=${rawgApiKey}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

exports.getGenres = async () => {
  try {
    const response = await axios.get(`${baseUrl}/genres?key=${rawgApiKey}`, {
      headers: {
        "content-type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
