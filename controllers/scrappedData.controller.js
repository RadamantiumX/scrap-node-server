import { StatusCodes } from "http-status-codes"
import { GetData } from "../models/getData.js"

export class ScrappedDataController {
    async modelsData(req, res, next){
        try{
           const page = parseInt(req.params.page)
           const fixedIndex = page - 1
           const limit = 9
           const data = await GetData.getProfileData(limit, fixedIndex)
           const count = await GetData.documentCount()
           const totalPages = Math.ceil(count / limit)
           const paging = {
              currentPage: page,
              totalResults: count,
              totalPages: totalPages,
              sizePage: limit
           }
           
           res.status(StatusCodes.OK).json({ data:data, paging: paging })

        }catch(err){
            return next({
                status:StatusCodes.BAD_REQUEST,
                message: 'Something went wrong'
            })
        }
    }
}