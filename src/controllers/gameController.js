const apiResponse = require("../utils/apiResponse");

const gameServices = require("../services/gameServices");

exports.getAllGames = async (req, res) => {
  try {
    const games = await gameServices.getGames(req.query);

    return apiResponse.success(res, req, games);
  } catch (error) {
    return apiResponse.fail(res, error, error.status || 500);
  }
};

exports.getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await gameServices.getGameById(id);

    return apiResponse.success(res, req, game);
  } catch (error) {
    return apiResponse.fail(res, error, error.status || 500);
  }
};

exports.getGenres = async (req, res) => {
  try {
    const genres = await gameServices.getGenres();

    return apiResponse.success(res, req, genres);
  } catch (error) {
    return apiResponse.fail(res, error, error.status || 500);
  }
};
