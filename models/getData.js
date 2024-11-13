import { connect } from "../db/mongo-conn.js";

export class GetData{
    static async getCoverData(per_page, current_page){
        try{
          const db = await connect()
          const data = db.find().skip(per_page * current_page).limit(per_page).project({ name: 1, url:1, thumb:1 })
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