import { readJSON } from "../utils/read-json";

export class GetData{
    static async getProfileData(){
        const data = await readJSON(`./data/full-data-filled.json`)
        return data
    }
}