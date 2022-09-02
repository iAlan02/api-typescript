import { Request, Response, NextFunction } from "express";
const states = require("../../utils/cities.json");

const getStates = async (req: Request, res: Response, next: NextFunction) => {
  console.log("getStates");
  return res.status(200).json(states);
};

const getStateByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("getStateByName");

  const notFound = "State not found";
  const stateName = req.params.stateName;
  let state: string;

  state = states.find((c: { name: string }) => c.name === stateName);

  if (!state) {
    return res.status(404).send(notFound);
  }

  return res.status(200).json(state);
};

const addState = async (req: Request, res: Response, next: NextFunction) => {
  console.log("addState");

  res.status(200).send("Created " + JSON.stringify(req.body));
};

const updateState = async (req: Request, res: Response, next: NextFunction) => {
  console.log("updateState");

  res.status(200).send("Updated " + JSON.stringify(req.body));
};

const patchState = async (req: Request, res: Response, next: NextFunction) => {
  console.log("patchState");

  res.status(200).send("Patched " + JSON.stringify(req.body));
};

const removeState = async (req: Request, res: Response, next: NextFunction) => {
  console.log("removeState");
  const notFound = "State not found";
  const stateName = req.params.stateName;
  let state: string;

  state = states.find((c: { name: string }) => c.name === stateName);

  if (!state) {
    return res.status(404).send(notFound);
  }

  res.status(200).send("Removed " + JSON.stringify(req.body));
};

export default {
  getStates,
  getStateByName,
  addState,
  updateState,
  patchState,
  removeState,
};
