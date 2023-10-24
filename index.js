const express = require('express')
const app = express()
app.use("/login", (req, res, next) => {
    console.log(req.body);
    res.send("login");
})

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
