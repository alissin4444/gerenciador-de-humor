# gerenciador-de-humor
Estudo de sequelize com relacionamentos mais complexos

### INTRODUÇÃO
Esse projeto visa aprimorar meus conhecimentos acerca de sequelize e postgreSQL. Ele foi desenvolvido enquanto eu era integrante da empresa Zhealth Blockchain e precisava desenvolver projetos que utilizavam o ORM Sequelize e o banco de dados PostgreSQL

### FLUXO DE TRABALHO
Entro no software, crio uma cor, crio um avatar, crio um humor, crio minhas tags, adiciono o registro, preencheencho o registro (tags, humor, cor e o conteúdo do registro), Além disso, posso filtrar de diversas formas esses registros e também receber uma análise aritmética dos registros x humores

### ROTAS PARA CONSUMO

  #### Lista todos os avatares
  - GET -> "/avatares"
  #### Cria um avatar
  - POST -> "/avatares"
  #### Visualiza um avatar
  - GET -> "/avatares/:id_avatar"
  #### Atualiza um dos avatares
  - PUT -> "/avatares/:id_avatar"
  #### Apaga um dos avatares
  - DELETE -> "/avatares/:id_avatar"
  
  #### Lista todos os humores
  - GET -> "/humores"
  #### Cria um humor
  - POST -> "/humores"
  #### Visualiza um humor
  - GET -> "/humores/:id_humor"
  #### Atualiza um dos humores
  - PUT -> "/humores/:id_humor"
  #### Apaga um dos humores
  - DELETE -> "/humores/:id_humor"
  
  #### Lista todos as cores
  - GET -> "/cores"
  #### Cria uma cor
  - POST -> "/cores"
  #### Visualiza uma cor
  - GET -> "/cores/:id_cor"
  #### Atualiza uma das cores
  - PUT -> "/cores/:id_cor"
  #### Apaga uma das cores
  - DELETE -> "/cores/:id_cor"
  
  #### Lista todos os registros
  - GET -> "/registries"
  #### Cria um registro
  - POST -> "/humores/:id/registries"
  #### Visualiza um registro
  - GET -> "/registries/:id"
  #### Atualiza um dos registros
  - PUT -> "/registries/:id"
  #### Apaga um dos registros
  - DELETE -> "/registries/:id"
  
  #### Lista todos as tags de um registro
  - GET -> "/registries/:id/tags"
  #### Lista todos os registros que contem uma tag
  - GET -> "/tags"
  #### Visualiza todos os registros que contem um humor e uma tag específica
  - GET -> "/humores/:id/registries/tags"
  
  #### Filtra todos os registros por um humor
  - GET -> "/filter/humores/:id/registries"
  #### Filtra todos os registros por uma cor
  - GET -> "/filter/cores/:id/registries"
  #### Trás todos os humores e seus registros consigo
  - GET -> "/filter/humores/registries"
  
  #### Trás uma média aritmética de todos os humores (quantos registros cada um tem em relação ao todo)
  - GET -> "/porcentage"
