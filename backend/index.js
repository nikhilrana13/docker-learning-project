const express = require("express") 
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")


dotenv.config()

const PORT = process.env.PORT || 5000 
const app = express()

// middleware 
app.use(cors())
app.use(express.json())
app.use(cookieParser())



// routes
app.get("/",(req,res)=>{
    res.send("hello from backend")}
)
// db 



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})




