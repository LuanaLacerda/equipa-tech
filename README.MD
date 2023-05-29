# Back-End Equipa Tech

## Introdução

O usuário pode acessar e utilizar a nossa solução, a Equipa Tech, pelo site ou app. Para solicitar o empréstimo de equipamentos, eles podem acessar nosso sistema e preencher um formulário de solicitação. Neste formulário, ele seleciona o tipo de equipamento desejado e a duração do empréstimo. Após o envio da solicitação, o algoritmo analisa as informações, e se o perfil se enquadrar no tipo de perfil contemplado (baixa renda, desempregado e dentro do programa Potência Tech ou parceiro), o equipamento será entregue ao usuário em sua residência ou local de preferência. Durante o período de empréstimo, o usuário pode utilizar o dispositivo para realização do(s) curso(s) online. Em caso de dúvidas ou problemas técnicos, oferecemos suporte técnico.


## Linguagem, framework e/ou tecnologias usadas

- NodeJs
- Javascript
- PostegreSQL
- ExpressJs
- Bcrypt
- JsonWebtoken
- Knex

## Rotas

- ```[POST]/usuario``` : Cadastro do Usuário que deseja um equipamento emprestado
  
- ```[POST]/doacao``` : Cadastro do Usuário que deseja fazer doação de equipamento

- ```[POST]/login``` : Login do usuário

- ``[GET]/usuario``: Disponibiliza dados do usuário logado

- ``[PUT]/usuario``: Atualiza dados do usuário logado

## O QUE FALTA IMPLEMENTAR 

- Terminar a integração da tabela de cadastro de equipamento e quem vai ter acesso a ela para preencher
- Criação das rotas:
-- Deletar usuario
-- Cadastrar equipamento
-- Atualizar equipamento
-- Buscar equipamentos
-- Deletar equipamentos

- Fazer o deploy do banco de dados e da aplicação(banco de dados está funcionando somente local)

