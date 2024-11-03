import { Router } from "express";
import { ScrappedDataController } from "../controllers/scrappedData.controller.js";

const scrappedDataRouter = Router()
const scrappedDataController = new ScrappedDataController()

scrappedDataRouter.get('/models', scrappedDataController.modelsData)

export default scrappedDataRouter