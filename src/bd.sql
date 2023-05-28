CREATE database equipa_tech

drop table if exists usuarios;



CREATE table usuarios (
  id serial primary key,
  nome text NOT NULL,
  cpf varchar(11) UNIQUE,
  genero text not null,
  data_nascimento date NOT NULL,
  data_emprestimo date,
  telefone varchar(15) UNIQUE,
  email text NOT NULL UNIQUE,
  senha text NOT NULL
);

drop table if exists doacoes;

CREATE table doacoes (
  id serial primary key,
  nome text NOT NULL,
  cpf_cnpj integer UNIQUE,
  data_nascimento date NOT NULL,
  telefone varchar(15) UNIQUE,
  email text NOT NULL UNIQUE,
  ativo boolean DEFAULT TRUE
);

drop table if exists equipamentos;

CREATE table equipamentos (
  id serial primary key,
  nome text NOT NULL,
  ram text not null,
  memoria text not null,
  estado_bateria text not null,
  data_cadastro timestamptz NOT NULL,
  ativo boolean DEFAULT TRUE,
  usuario_id integer,
  doacao_id integer,
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
  FOREIGN KEY (doacao_id) REFERENCES doacoes (id)
);


