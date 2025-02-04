const conn = require("../mysql-connections");

module.exports({
    
    post: async(req, res)=>{
        const{titulo, id_autor, genero} = req.body;

        try{
            const autor = await conn.select()
            .from("autor")
            .where({id: id_autor});
            
            if (autor.length <= 0) {
                return res.status(400).send({ msg: `O código ${id_autor} de autor não existe` });
            }

            await conn("autor").insert({
                titulo,
                id_autor,
                genero
            });

        }
        catch(error){
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar livro" });
        }

        if(!titulo){
            return res.status(309).send({msg:"o campo nome é obrigatório"});
        }
        if(!genero){
            return res.status(309).send({msg:"o campo nacionalidade é obrigatório"});
        }

        conn.raw("INSERT INTO LIVRO (TITULO, GENERO)")
            .then((data,()=>{
                res.status(200).send({msg:"autor cadastrado com sucesso"});
            }))
            .catch((data,()=>{
                res.status(500).send({msg:"autor cadastrado com sucesso"});
            }));

    },
    get:(req,res)=>{
        conn.raw("SELECT * FROM LIVRO")
            .then((data,()=>{
                res.status(200).send(data[0])
            }))
            .catch((data,()=>{
                res.status(500).send({msg:"não foi possivel consultar os livros"});
            }));
    },

    put:(req,res)=>{
        conn.raw("SELECT * FORM LIVRO")
        .then((data, ()=>{
            res.status(200).send(data[0]);
        }))
        .catch((error, ()=>{
            res.status(500).send({msg:"erro ao autualizar livro"})
        }));
    },
    delete:(req,res)=>{
        const { id } = req.params;

        conn.raw(`DELETE FORM CLIENTE WHERE ID = ${id}`)
            .then((data, ()=>{
                console.log(data[0].affectedRows);

                if(data[0].affectedRows ==0){
                    return res.status(404).send({ msg: "livro não encontrado" });
                } else {
                    return res.status(200).send({ msg: "livro deletado com sucesso" });
                }
            }))
            .catch((error) =>{
                console.log(error)
                res.status(500).send("erro ao deletar livro");
            })
    }
})