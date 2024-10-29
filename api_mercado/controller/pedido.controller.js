const conn = require("../mysql-connection");
const { cadastro, atualizar, consultar } = require("./cliente.controller");

module.exports=({
    cadastro:(req, res) =>{
        const { nome, preco } = req.body;

        if(!nome){
            return res.status(309).send({msg:"o campo de nome é obrigatório"})
        }
        var comando = ``;

        if(!preco){
            comando = `INSERT INTO PRODUTO(nome, preco) VALUES ('${nome}, null')`
        }else{
             comando = `INSERT INTO PRODUTO(nome, preco) VALUES ('${nome},${preco}')`
        }
    },

    consultar:(req, res) =>{
    

    },
    atualizar:(req, res) =>{


    },
    deletar:(req, res) =>{


    }
})