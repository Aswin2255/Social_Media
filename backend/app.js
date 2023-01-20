const expres = require('express')
const app = expres()
const mongoose = require("mongoose")
const cors = require("cors");
const router = require('./Routes/Authroutes');
const cookie = require('cookie-parser')

app.use(expres.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(cookie())
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://0.0.0.0:27017/jwt", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('Database connected')
}).catch((er) => {
    console.log('error')
    console.log(er)
})
const port = 5000
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})

app.use('/',router)







