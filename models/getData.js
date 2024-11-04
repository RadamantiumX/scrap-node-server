import { connect } from "../db/mongo-conn.js";

export class GetData{
    static async getProfileData(per_page, current_page){
        try{
          const db = await connect()
          const data = db.find().skip(per_page * current_page).limit(per_page)
          return data.toArray()
         }catch(error){
            console.log('Failed to request DB')
            console.error(error)
         }
    }
}