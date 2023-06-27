import express from 'express';

const app = express();

app.get('/', (req,res)=>{
  res.send('Hello World');
})

app.listen(3000, (error)=>{
  if(error){
    return console.log(error)
  }

  console.log('Server OK');
})
