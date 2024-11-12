module.exports = ({
    cadastar: async (req, res) => {
        const { id_tamanho, nome } = req.body;

        try {
            const id_tamanho = await conn.select()
                .from("tamanho")
                .where({ id: id_tamanho });

            return res.status(200).send({ msg: "caldo de cana cadastrado com sucesso" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar caldo de cana" });
        }
    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM caldo").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {    
            console.log(erro);
            res.status(500).send("Erro ao realizar a consulta");
        });
    }
})