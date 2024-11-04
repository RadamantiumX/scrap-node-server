import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.MONGODB_CONNECT_STRING_URI
const COLLECTION = process.env.COLLECTION_NAME
const DB = process.env.DATABASE

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export async function connect() {
    try{
        await client.connect()
        const database = client.db(DB)
        return database.collection(COLLECTION)
    }catch(error){
        console.error('Error to connect DB')
        console.error(error)
        await client.close()
    }
}