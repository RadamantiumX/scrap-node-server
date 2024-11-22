import { StatusCodes } from "http-status-codes"
import { GetData } from "../models/getData.js"
import { firstLetterToUpperCase } from "../helpers/firstLetterUpperCase.js"

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
            const url = `${process.env.SOURCE_URL}/${name}` // Using the complete URL to optmized the response
            const data = await GetData.getContentData(url)
            if(!data){
                res.status(StatusCodes.OK).json(null)
            }
            res.status(StatusCodes.OK).json(data)
        }catch(error){
            return next({
                status:StatusCodes.BAD_REQUEST,
                message: 'Something went wrong'
            })
        }
    }
    async mediaData(req, res, next){
        try{
            /**
             * @param req.src_id --> image index
             */
            const {url_name, src_id } = req.params
            const url = `${process.env.SOURCE_URL}/${url_name}` // Using the complete URL to 
            const data = await GetData.getMediaData(url)
            if(!data){
                res.status(StatusCodes.OK).json(null)
            }
           res.status(StatusCodes.OK).json({ id: data.id, name: data.name,embed:data.source[parseInt(src_id)].embed, post_text: data.source[parseInt(src_id)].post_text, tags: data.tags, count: data.source.length })
        }catch(error){
            return next({
                status:StatusCodes.BAD_REQUEST,
                message: 'Something went wrong'
            })
        }
    }
   async filterData(req, res, next){
      try{
       const query = req.params.query
       const page = parseInt(req.params.page)
       const fixedIndex = page - 1
       const limit = 9
       const formattedRequest = firstLetterToUpperCase(query)
       const results = await GetData.getFilterData(formattedRequest,limit, fixedIndex)
       if(results.length === 0){
        res.status(StatusCodes.OK).json({ message: 'No results founded...' })
       }
       const count = results.length
       const totalPages = Math.ceil(count / limit)
       const pagination = {
          currentPage: page,
          totalResults: count,
          totalPages: totalPages,
          sizePage: limit
       }
       res.status(StatusCodes.OK).json({data:results, pagination: pagination})

       }catch(error){
        return next({
            status:StatusCodes.BAD_REQUEST,
            message: 'Something went wrong'
        })
      }
   } 
}