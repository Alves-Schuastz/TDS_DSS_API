module.exports = {
    cadastar: async (req, res) => {
        const { id_sabor, nome } = req.body;

        try {
            const id_sabor = await conn.select()
                .from("sabor")
                .where({ id: id_sabor });

            return res.status(200).send({ msg: "pastel cadastrado com sucesso" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar pastel" });
        }
    }
}