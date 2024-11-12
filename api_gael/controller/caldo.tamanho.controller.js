module.exports({
    cadastro: (req, res) => {
        const { conteudo, preco } = req.body

        var comando = ``

        conn.raw(comando)
            .then((data) => {
                res.status(200).send({ msg: "Tamanho cadastrado" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar Tamanho");
            });

    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM tamanho").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("erro ao consultar tamanho")
        });
    },
    atualizar: (req, res) => {
        const { conteudo, preco } = req.body

        conn.raw(`UPDATE CLIENTE SET conteudo = '${conteudo}',
            telefone= '${preco}'
            `).then((data) => {
            console.log(data);
            res.status(200).send({ msg: "tamanho atualizado com sucesso" })
        }).catch((error) => {
            console.log(error);
            res.status(500).send({ msg: "Erro ao atualizar o tamanho" });
        });
    },

    deletar: (req, res) => {
        const { id } = req.params

        conn.raw(`DELETE FROM tamanho WHERE ID = ${id}`).then((data) => {
            console.log(data[0].affectedRows);

            if (data[0].affectedRows == 0) {
                return res.status(404).send({ msg: "tamanho nao encontrado" });
            } else {
                return res.status(200).send({ msg: "tamanho deletado" });
            }
        }).catch((error) => {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o cliente" });
        })
    }
})