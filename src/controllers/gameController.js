const apiResponse = require("../utils/apiResponse");

const gameServices = require("../services/gameServices");

exports.getAllGames = async (req, res) => {
  try {
    const games = await gameServices.getGames();

    return apiResponse.success(res, req, games);
  } catch (error) {
    return apiResponse.fail(res, error, error.status || 500);
  }
};
