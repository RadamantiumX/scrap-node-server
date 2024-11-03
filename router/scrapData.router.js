import { Router } from "express";
import { ScrappedDataController } from "../controllers/scrappedData.controller";

const scrappedDataRouter = Router()
const scrappedDataController = new ScrappedDataController()

scrappedDataRouter.get('/data', scrappedDataController.modelsData)

export default scrappedDataRouter