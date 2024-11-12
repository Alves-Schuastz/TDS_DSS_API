module.exports({
    cadastro: (req, res) => {
        const { sabor, preco } = req.body

        var comando = ``

        conn.raw(comando)
            .then((data) => {
                res.status(200).send({ msg: "sabor cadastrado" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar sabor");
            });

    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM sabor").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("erro ao consultar sabor")
        });
    },
    atualizar: (req, res) => {
        const { sabor, preco } = req.body

        conn.raw(`UPDATE CLIENTE SET sabor = '${sabor}',
            telefone= '${preco}'
            `).then((data) => {
            console.log(data);
            res.status(200).send({ msg: "sabor atualizado com sucesso" })
        }).catch((error) => {
            console.log(error);
            res.status(500).send({ msg: "Erro ao atualizar o sabor" });
        });
    },

    deletar: (req, res) => {
        const { id } = req.params

        conn.raw(`DELETE FROM tamanho WHERE ID = ${id}`).then((data) => {
            console.log(data[0].affectedRows);

            if (data[0].affectedRows == 0) {
                return res.status(404).send({ msg: "sabor nao encontrado" });
            } else {
                return res.status(200).send({ msg: "sabor deletado" });
            }
        }).catch((error) => {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o sabor" });
        })
    }
})