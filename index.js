import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.DB)
.then(()=> console.log("Connection to DB is succeed"))
.catch((error)=> console.log("DB error", error))

const app = express();

app.get('/', (req,res)=>{
  res.send('Hello World');
})

app.listen(process.env.PORT, (error)=>{
  if(error){
    return console.log(error)
  }

  console.log('Server OK');
})
