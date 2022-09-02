import express from "express";
import statesController from "../controllers/state/states.controller";

const router = express.Router();

router
  .get("/getState", statesController.getStates)
  .get("/:stateName", statesController.getStateByName)
  .post("/create/:stateName", statesController.addState)
  .put("/update/:stateName", statesController.updateState)
  .patch("/patch/:stateName", statesController.patchState)
  .delete("/delete/:stateName", statesController.removeState);

export = router;
