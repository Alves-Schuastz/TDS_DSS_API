-- comandos dll estrutura do banco de dados mercado
CREATE TABLE produto(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(9,2),
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR (25),
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE pedido(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES cliente(id),

    id_produto INT NOT NULL,
    FOREIGN KEY(id_produto) REFERENCES produto(id),

    quantidade INT,
    total DECIMAL(9,2)
);