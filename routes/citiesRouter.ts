import express from "express";
import citiesController from "../controllers/city/cities.controller";

const router = express.Router();

router
  .get("/getCities", citiesController.getCities)
  .get("/:cityName", citiesController.getCityByName)
  .post("/create/:cityname", citiesController.addCity)
  .put("/update/:cityName", citiesController.updateCity)
  .patch("/patch/:cityName", citiesController.patchCity)
  .delete("/delete/:cityName", citiesController.removeCity);

export = router;
