import { StatusCodes } from "http-status-codes"
import { GetData } from "../models/getData.js"

export class ScrappedDataController {
    async modelsData(req, res, next){
        try{
           const data = await GetData.getProfileData()
           res.status(StatusCodes.OK).json({ data })
        }catch(err){
            return next({
                status: StatusCodes.BAD_REQUEST,
                message: "Something went Wrong"
            })
        }
    }
}