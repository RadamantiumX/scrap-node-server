import { Router } from "express";
import { ScrappedDataController } from "../controllers/scrappedData.controller.js";

const scrappedDataRouter = Router()
const scrappedDataController = new ScrappedDataController()

scrappedDataRouter.get('/cover/:page', scrappedDataController.coverData)
scrappedDataRouter.get('/content/:name', scrappedDataController.contentData)
scrappedDataRouter.get('/media/:url_name/:src_id', scrappedDataController.mediaData)
scrappedDataRouter.get('/search/:query/:page', scrappedDataController.filterData)
scrappedDataRouter.get('/url', scrappedDataController.urlData)

export default scrappedDataRouter