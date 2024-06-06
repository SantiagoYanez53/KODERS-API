//<>
const express = require ("express")

const kodersRouter = require ("./routes/Koders.router")
const authRouter = require("./routes/auth.router")
const genRouter = require ("./routes/generation.router")

const app = express();

//middleware
app.use(express.json());
app.use("/koders", kodersRouter)
app.use("/auth", authRouter)
app.use("/generations", genRouter)

app.get("/", (req,res) => {
    res.json({
        message: "Koders APIv1"
    })
})

module.exports = app