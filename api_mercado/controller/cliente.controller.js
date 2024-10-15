const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => {
        const{nome,telefone} = req.body;

        var comando = ``;

        if(!telefone){
            comando = `INSERT INTO CLIENTE(nome, telefone) VALUES ('${nome},null')`
        }else{
            comando = `INSERT INTO CLIENTE(nome, telefone) VALUES('${nome}', '${telefone}')`
        }
    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM CLIENTE").then((data) => {
            res.send(data[0]);
        }).catch((erro) => {
            res.send("Erro ao consultar os clientes!");
        });
    },


    consultar:(req, res) => {},
    atualizar: (req, res) => { },
    deletar: (req, res) => {}
})