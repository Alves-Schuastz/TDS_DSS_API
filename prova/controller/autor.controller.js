const conn = require("../mysql-connections");

module.exports({
    
    post:(req, res)=>{
        const{nome, nacionalidade} = req.body;

        if(!nome){
            return res.status(309).send({msg:"o campo nome é obrigatório"});
        }
        if(!nacionalidade){
            return res.status(309).send({msg:"o campo nacionalidade é obrigatório"});
        }

        conn.raw("INSERT INTO AUTOR (NOME, NACIONALIDADE)")
            .then((data,()=>{
                res.status(200).send({msg:"autor cadastrado com sucesso"});
            }))
            .catch((data,()=>{
                res.status(500).send({msg:"autor cadastrado com sucesso"});
            }));

    },
    get:(req,res)=>{
        conn.raw("SELECT * FROM AUTOR")
            .then((data,()=>{
                res.status(200).send(data[0])
            }))
            .catch((data,()=>{
                res.status(500).send({msg:"não foi possivel consultar os autores"});
            }));
    },

    put:(req,res)=>{
        conn.raw("SELECT * FORM AUTOR")
        .then((data, ()=>{
            res.status(200).send(data[0]);
        }))
        .catch((error, ()=>{
            res.status(500).send({msg:"erro ao autualizar autor"})
        }));
    },
    delete:(req,res)=>{
        const { id } = req.params;

        conn.raw(`DELETE FORM CLIENTE WHERE ID = ${id}`)
            .then((data, ()=>{
                console.log(data[0].affectedRows);

                if(data[0].affectedRows ==0){
                    return res.status(404).send({ msg: "autor não encontrado" });
                } else {
                    return res.status(200).send({ msg: "autor deletado com sucesso" });
                }
            }))
            .catch((error) =>{
                console.log(error)
                res.status(500).send("erro ao deletar autor");
            })
    }
})