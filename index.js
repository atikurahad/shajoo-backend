const app = require('./app')
const mongoose =require('mongoose')



app.listen(8080,()=>{
console.log(`App is listening on port:8080`);

})

mongoose
  .connect("mongodb://localhost/products")
  .then(() => console.log("connected with DB"))
  .catch((err) => console.log(err))