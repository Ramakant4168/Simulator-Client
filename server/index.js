import express from 'express';
import path from 'path';

const app=express();


app.get('/*',(req,res)=>{

	res.sendFile(path.join(__dirname,'../src/com/quickstart/index.html'));

})

app.listen(3000,()=>{

console.log("App running on port 3000!");
console.log("Access localhost:3000/");

});