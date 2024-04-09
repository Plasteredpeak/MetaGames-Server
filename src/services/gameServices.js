require("dotenv").config();

const axios = require("axios");

const rawgApiKey = process.env.RAWG_API_KEY;

const baseUrl = "https://api.rawg.io/api";

exports.getGames = async () => {
  try {
    console.log(rawgApiKey);
    const response = await axios.get(`${baseUrl}/games?key=${rawgApiKey}`, {
      headers: {
        "content-type": "application/json",
      },
    });

    console.log(response.data);

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
