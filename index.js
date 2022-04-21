const express= require('express');
const app = express();
const cors=require('cors')
const pool=require('./db/connect')


//import routes
const todoRouter=require('./routes/todo')
//middlewaere
app.use(cors());

//parse json
app.use(express.json())


//routing//
app.use('/',todoRouter);





app.listen(5000,()=>{
    console.log("server has started at port 5000")
})