const express= require('express')
const app = express();

const router = require('./src/routes/api')
const productController = require("./src/controllers/productsController")

app.use("/api/v1", productController)
app.use(express.json())
pp.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)

module.exports = app;