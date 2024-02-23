const { Console } = require("console");
const express = require("express");
const app = express();
const sendEmail = require("./controllers/sendEmail")
let PORT = 3001 || process.env.PORT
app.use(express.json()) 

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("This is the AI-ML server")
});

//send email endpoint
app.post("/sendEmail", sendEmail)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Port is running on port: ${PORT}`)
        })
    } catch (error) {
        console.log(`Error while starting the server: ${error}`)
    }
}

start();