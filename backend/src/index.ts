import express from "express";

const app = express();

app.get("/hello", (req, res, next) => {
    
})

app.listen(5000, () => console.log("Server Open"));