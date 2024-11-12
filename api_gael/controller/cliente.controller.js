module.exports({
    cadastro: (req,res) =>{
        const {id, nome, telefone, cpf, cupon} = req.body

        var comando = ``

        conn.raw(comando)
        .then((data) => {
            res.status(200).send({ msg: "Cliente cadastrado com sucesso!" });
        })
        .catch((error) => {
            res.status(500).send("Erro ao cadastrar um cliente!");
        });

    },
    consultar: (req,res) =>{
        conn.raw("SELECT * FROM CLIENTE").then((data) =>{
            res.status(200).send(data[0]);
        }).catch((erro) =>{
            console.log(erro);
            res.status(500).send("erro ao consultar clientes")
        });
    },
    atualizar: (req,res) => {
        const {nome, telefone, cpf, cupon} = req.body

        conn.raw(`UPDATE CLIENTE SET nome = '${nome}',
            telefone= '${telefone}',
            cpf= '${cpf}
            cupon= '${cupon} `).then((data)=>{
                console.log(data);
                res.status(200).send({ msg: "Cliente atualizado com sucesso" })
            }).catch((error) => {
                console.log(error);
                res.status(500).send({ msg: "Erro ao atualizar o cliente" });
            });
    },

    deletar: (req,res)=>{
        const {id} = req.params

        conn.raw(`DELETE FROM CLIENTE WHERE ID = ${id}`).then((data) => {
            console.log(data[0].affectedRows);
        
            if (data[0].affectedRows == 0) {
                return res.status(404).send({ msg: "cliente nao encontrado" });
            } else {
                return res.status(200).send({ msg: "Cliente deletado" });
            }
        }).catch((error) =>{
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o cliente" });
        })
    }

})