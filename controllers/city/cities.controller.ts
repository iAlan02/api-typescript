import { Request, Response, NextFunction } from "express";
const cities = require("../../utils/cities.json");

const getCities = async (req: Request, res: Response, next: NextFunction) => {
  console.log("getCities");
  return res.status(200).json(cities);
};

const getCityByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("getCityByName");

  const notFound = "City not found";
  const cityName = req.params.cityName;
  let city: string;

  city = cities.find((c: { name: string }) => c.name === cityName);

  if (!city) {
    return res.status(404).send(notFound);
  }

  return res.status(200).json(city);
};

const addCity = async (req: Request, res: Response, next: NextFunction) => {
  console.log("addCity");

  res.status(200).send("Created " + JSON.stringify(req.body));
};

const updateCity = async (req: Request, res: Response, next: NextFunction) => {
  console.log("updateCity");

  res.status(200).send("Updated " + JSON.stringify(req.body));
};

const patchCity = async (req: Request, res: Response, next: NextFunction) => {
  console.log("patchCity");

  res.status(200).send("Patched " + JSON.stringify(req.body));
};

const removeCity = async (req: Request, res: Response, next: NextFunction) => {
  console.log("removeCity");
  const notFound = "City not found";
  const cityName = req.params.cityName;
  let city: string;

  city = cities.find((c: { name: string }) => c.name === cityName);

  if (!city) {
    return res.status(404).send(notFound);
  }

  res.status(200).send("Removed " + JSON.stringify(req.body));
};

export default { getCities, getCityByName, addCity, updateCity, patchCity, removeCity };
