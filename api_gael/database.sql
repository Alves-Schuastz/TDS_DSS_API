CREATE DATABASE gael;

CREATE TABLE gael.cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(10) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    cupons VARCHAR(3), 
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE gael.caldo{
    sabor VARCHAR(50) NOT NULL,
    id_tamanho INT NOT NULL,
    FOREIGN KEY(id_cliente)
}

CREATE TABLE gael.id_tamanho{
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    conteudo VARCHAR(50) NOT NULL,
    preco DECIMAL(3,2) NOT NULL,    
}

CREATE TABLE mercado.pedido(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES cliente(id),
    id_produto INT NOT NULL,
    FOREIGN KEY(id_produto) REFERENCES produto(id),
    quantidade INT,
    total DECIMAL(9,2)
);