import cors from "cors"
import dotenv from "dotenv"
import createError from "http-errors"
import express, { NextFunction, Request } from "express"

import { appListener, globalErrorHandler, port } from "./config/app.config"

import allRoutes from "./routes/route"

// config
dotenv.config()

const app = express()

// auth
app.use(cors({ origin: "*" }))

// routes
app.use(allRoutes)

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// error handler
app.use((req: Request, _, next: NextFunction) => {
  next(createError.NotFound(`Can't find ${req.originalUrl} on the server!`))
})
app.use(globalErrorHandler)

// listener
app.listen(port, appListener)
