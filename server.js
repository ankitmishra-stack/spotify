const express = require('express');
const sequelize = require('sequelize');
const app = express();
const db = require('./model-index');


app.get('/', (req, res) => {
    res.status(200).send({message:'Welcome to spotify...'})
})
 app.get('/create',(req, res)=> {
    res.status(200).send({message:'created succesfully'})
 })









const PORT = process.env.PORT || 8000;
app.listen(PORT,()=> {
    console.log('Server is running on Port', + ' ' + PORT,  'Help by Ravi Bhau')
})
