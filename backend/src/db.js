const mongoose = require('mongoose');

const {DB_USER,DB_PASSWORD,DB_NAME} = process.env
const MONGODB_URI_LOCAL = `mongodb://${MOVIES_MONGODB_HOST}/${DB_NAME}`
const MONGODB_URI_CLUSTER = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.eayxd.mongodb.net/${DB_NAME}`

const connection = async()=> {
    const conn = await mongoose.connect(MONGODB_URI_LOCAL,{useNewUrlParser: true,useUnifiedTopology: true})
    console.log('DB is connected',conn.connection.host)
}

module.exports = {connection,mongoose}