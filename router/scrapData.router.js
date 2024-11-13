import { Router } from "express";
import { ScrappedDataController } from "../controllers/scrappedData.controller.js";

const scrappedDataRouter = Router()
const scrappedDataController = new ScrappedDataController()

scrappedDataRouter.get('/model/:page', scrappedDataController.coverData)
scrappedDataRouter.get('/content/:name', scrappedDataController.contentData)

export default scrappedDataRouter