const conn = require("../mysql-connection");

module.exports = {
    cadastrar: async (req, res) => {
        const { id_cliente, id_caldo, id_pastel, quantidadePastel, quantidadeCaldo } = req.body;

        try {
            const cliente = await conn.select()
                .from("cliente")
                .where({ id: id_cliente });

            if (cliente.length <= 0) {
                return res.status(400).send({ msg: `O código ${id_cliente} do cliente não existe!` });
            }

            const caldo = await conn.select()
                .from("caldo")
                .where({ id: id_caldo });

            if (caldo.length <= 0) {
                return res.status(400).send({ msg: `O código ${id_caldo}  não existe!` })
            }

            const pastel = await conn.select()
                .from("pastel")
                .where({ id: id_pastel });

            if (caldo.length <= 0) {
                return res.status(400).send({ msg: `O código ${id_caldo}  não existe!` })
            }


            if (quantidadePastel <= 0) {
                return res.status(309).send({ msg: "A quantidade deve ser maior do que zero!" })
            }


            if (quantidadeCaldo <= 0) {
                return res.status(309).send({ msg: "A quantidade deve ser maior do que zero!" })
            }

            var total = quantidade * caldo[0].preco;
            var total = quantidade * pastel[0].preco;

            await conn("pedido").insert({
                id_cliente,
                id_caldo,
                id_pastel,
                quantidadePastel,
                quantidadeCaldo,
                total
            });

            return res.status(200).send({ msg: "Pedido Cadastrado com sucesso!" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar um pedido!" });
        }
    }
};