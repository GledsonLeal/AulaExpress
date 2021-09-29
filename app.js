const express = require ("express")

const app = express()
const port = 8081
app.get("/", function(req, res){
    res.send("<h1>Rota Principal</h1>")
})

app.get("/rota",function(req, res){
    res.send("Isso é uma rota")
})

app.listen(port, function(){
    console.log("Servidor rodando na URL http://localhost:8081")
})