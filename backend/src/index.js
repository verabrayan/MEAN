require('dotenv').config();

const app = require('./server')




const server = app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})
process.on('unhandledRejection',(err,promise)=>{
    console.log('Error',err.message)
    server.close(()=>process.exit(1))
})