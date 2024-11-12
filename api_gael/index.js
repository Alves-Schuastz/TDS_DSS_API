const express = require("express")
const bodyParse = require("body-parser")
const indexRoutes = require("./routes/index.routes")

const conn = require("./mysql-connection");

const app = express();

app.use(bodyParse.json())
app.use(indexRoutes)

conn.raw('SELECT 1').then(() => {
    console.log(`Banco de dados conectado com sucesso!`);
}).catch((erro) => {
    console.log(`Erro ao conectar ao banco de dados ${erro}`);
});

AudioParamMap.listen(8080, ()=>{
    console.log(`servidor rodando certinho`);
})