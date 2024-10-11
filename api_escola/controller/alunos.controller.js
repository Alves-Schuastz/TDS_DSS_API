let alunos = [{
    id: 1,
    nome: "Ricardo",
    email: "bumbumguluso@hotmail.com",
    senha: "40028922",
    sala: "sala do gael"
}] 

module.exports({
    
    cadastrar: (req,res)=>{
        const { id, nome, email} = req.body;
        
    
        console.log(req.body);  
        alunos.push({
            id, nome, email, sala
        })
    
        res.send(req.body);        
            
    },

    atualizar:(req,res)=>{
        const {id, nome, email} = req.body;

        alunos.filter(item =>{
            if(item.id === id){
                item.nome = nome;
                item.email = email;
                item.sala = sala; 
                return res.send("atualizado com sucesso meu patrão!")
            }
        })

        return res.status(400).send("cliente não encontrado!");
    },

    deletar:(req,res)=>{

        const {id} = req.params;
        const index = alunos.findIndex(item => item.id == id);

        if(index === -1){
            return res.status(400).send("codigo nao existe :(")
        }

        alunos.splice(index,1);

        return res.send(alunos);
    },

    buscar:(req,res)=>{
        return res.status(200).send(alunos);
    }

    });