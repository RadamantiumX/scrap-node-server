import { StatusCodes } from "http-status-codes"
import { GetData } from "../models/getData.js"

export class ScrappedDataController {
    async modelsData(req, res, next){
        try{

           const data = await GetData.getProfileData()
           
           res.status(StatusCodes.OK).json({ data:data })

        }catch(err){
            return console.log(err)
        }
    }
}