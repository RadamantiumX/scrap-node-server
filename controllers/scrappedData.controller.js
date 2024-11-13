import { StatusCodes } from "http-status-codes"
import { GetData } from "../models/getData.js"

export class ScrappedDataController {
    async coverData(req, res, next){
        try{
           const page = parseInt(req.params.page)
           const fixedIndex = page - 1
           const limit = 9
           const data = await GetData.getCoverData(limit, fixedIndex)
           const count = await GetData.documentCount()
           const totalPages = Math.ceil(count / limit)
           const pagination = {
              currentPage: page,
              totalResults: count,
              totalPages: totalPages,
              sizePage: limit
           }
          
           res.status(StatusCodes.OK).json({ data:data, pagination: pagination })

        }catch(err){
            return next({
                status:StatusCodes.BAD_REQUEST,
                message: 'Something went wrong'
            })
        }
    }

    async contentData(req, res, next){
        try{
            const name = req.params.name
            const url = `https://www.twpornstars.com/${name}`
            const data = await GetData.getContentData(url)
            res.status(StatusCodes.OK).json(data)
        }catch(error){
            return next({
                status:StatusCodes.BAD_REQUEST,
                message: 'Something went wrong'
            })
        }
    }
}