import express from 'express'
import empleadosroutes from "./Routes/empleados.routes.js"
import indexroutes from "./Routes/index.routes.js"

import {PORT} from "./config.js"

const app = express()

app.use(express.json())

app.use(indexroutes)
app.use("/api", empleadosroutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint Not Found"
    })
})

export default app;