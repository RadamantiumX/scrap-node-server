import { connect } from "../db/mongo-conn.js";

export class GetData{
    static async getCoverData(per_page, current_page){
        try{
          const db = await connect()
          const data = db.find().skip(per_page * current_page).limit(per_page).project({ id:1, name: 1, url:1, thumb:1 })
          return data.toArray()
         }catch(error){
            console.log('Failed to request DB')
            console.error(error)
         }
    }

    static async getContentData(url){
       try{
        const db = await connect()
        const data = await db.findOne({ url: url })
        return data
       }catch(error){
        console.log('Failed to request DB')
        console.error(error)
       }
    }
    static async getMediaData(url){
        try{
          const db = await connect()
          const data = await db.findOne({ url: url },{ projection: { id:1, name:1, thumb: 1, source: 1, tags: 1 } })
          return data
        }catch(error){
            console.log('Failed to request DB')
            console.error(error)
        }
    }
    static async getFilterData(query, per_page, current_page){
        try{
            const db = await connect()
            const data = db.find({ name: { $regex: query } }).skip(per_page * current_page).limit(per_page).project({ id:1, name: 1, url:1, thumb:1 })
            return data.toArray()
        }catch(error){
            console.log('Failed to request DB')
            console.error(error)
        }
    }
    static async documentCount(){
        try{
            const db = await connect()
            const count = await db.countDocuments()
            return count

        }catch(error){
            console.error('Failed to request DB')
            console.error(error)
        }
    }
}