const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express();
const mysql = require("mysql");
// const { json } = require("body-parser");
const db= mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'CRUDDataBase',  
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post("/api/insert",(re,res)=>{
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = 
        "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";
    db.query(sqlInsert,[movieName, movieReview],(err,result)=>{
        console.log(err);
    });
});

app.listen(3002,()=>{
    console.log("Running on port 3002");
});