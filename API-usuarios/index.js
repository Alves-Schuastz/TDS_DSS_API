const bodyParser =require(`body-parser`)
const express = require('express')

const app = express() 
const port = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
////////////////////////////////////////////////////////////////////////////////////////////////////
var users=[{
    id: 1,
    nome: "Jorge Gabriel",
    email: "jorge.gabriel@ciss.com.br"
}];

const gearadorID = () => {
    if (users.length === 0) {
        return 1;  // Retorna 1 se o array estiver vazio
    } else {
        const ultimoUsuario = users[users.length - 1];
        if (ultimoUsuario && ultimoUsuario.id != null) {
            return ultimoUsuario.id + 1;  // Incrementa o ID do último usuário
        } else {
            // Caso o último ID seja inválido (null ou undefined), retorna 1 como fallback
             return 1;
        }
    }
};

const newUser = (nomeI, emailI) => {
    // console.log(users.length)
 var newId = gearadorID()

    const newUser = {
        id: newId,
        nome: nomeI,
        email: emailI
    };
    
    users.push(newUser);  // Adicionar o novo usuário à lista
};

app.post("/cadastro", (request, response) => {

    users.push(request.body);


    newUser("nao sei","naosei@gmail.com")

    response.status(201).send("Cadastro realizado com sucesso.");
    users.length - 1;
    console.log("teste " + users.length)

})

app.post("/cadastro2", (request, response) => {

    users.push(request.body);


    newUser("antonio","antonio@gmail.com")

    response.status(201).send("Cadastro realizado com sucesso.");

})


app.get("/consulta",(request, response)=>{
    response.status(200).send(users);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
