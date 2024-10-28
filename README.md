# Desafio Tecnico - Working Minds

Projeto desenvolvido como parte de um processo seletivo para Working Minds.
No backend, foi utilizado o CMS Strapi V5, que facilita a criação e gestão de conteúdo através de uma API RESTful, utilizada para o cadastro e gerenciamento de pessoas, incluindo informações como nome, email, cidade e estado.

## Tecnologias Utilizadas

- Next.js - Framework React para renderização SSR e SSG.
- TypeScript - Adiciona tipagem estática.
- Tailwind - Estilização utility first CSS.
- Zod - Biblioteca para validação e definição de esquemas com foco em TypeScript.
- Strapi v5 - CMS headless que facilita a criação e gestão de conteúdo.
- Docker - Plataforma de containerização que simplifica a criação, distribuição e execução de aplicações em ambientes isolados.

# Instalação e Execução

## Pré-requisitos

- Node.js (16 ou superior)
- npm
- Docker (instalado e em execução)
- Beekeeper Studio (opcional)

## Passo a passo para executar o projeto

### 1. Clone o repositório:
```bash
git clone https://github.com/erickdc27/wkm-api.git
```
```bash
cd wkm-api
```
### 2. Instale as dependências:
```bash
npm install
```
### 3. Inicialize o Banco de Dados através de um Docker container:
Com o Docker em execução, acesse a "image" oficial do postgres e crie um container para o Banco de Dados desta aplicação através do seguinte comando:
```bash
docker run --name strapi-postgres -e POSTGRES_PASSWORD=1720 -p 5432:5432 -d postgres
```
Verifique o status do container criado com o seguinte comando:
```bash
docker ps
```

### 4. Confirme a conexão com o Banco de Dados (opcional)
Caso esteja com o programa Beekeeper Studio instalado, sugiro que teste se a conexão do seu Docker container com o Banco de Dado da image postgres foi realizada com sucesso.
Pode fazer isso rapidamente através do seguinte passo a passo:
- abra o programa Beekeeper Studio
- em "new conection", selecione a opção "postgres"
- verifique se o campo "port" está preenchido com "5432"
- preencha o campo User com "postgres" e o campo Password com "1720"
- clique no botão "connect"
Se não acusar nenhum erro e a conexão ocorrer normalmente, significa que tudo está certo e funcionando
Obs: antes de realizar esse teste, certifique-se de que o postgres server não está em execução na sua maquina, pois ele já estará ocupando a porta 5432 e impedirá a conexão criada através do Docker

### 5. Configure as variáveis de ambiente:
Crie um arquivo .env na raiz deste diretorio `/wkm-api`
Copie o conteúdo do arquivo .env.example
Cole no arquivo .env que você criou o conteúdo copiado do arquivo .env.example

### 6. Inicie a aplicação:
```bash
npm run develop
```
### 7. Acesse o painel de administração do Strapi:
Abra o navegador e acesse o caminho `http://localhost:1337/admin` para criar o seu Super Admin e poder gerenciar os dados dos modelos criados.

### 8. Liberação do acesso público das APIs necessárias para cadastro:
Acesse o caminho Settings/Users & Permissions Plugin/Roles/Public e selecione a opção "all" do campo "permissions" para cada modelo/API (Cidade, Estado, Pessoa).

### 9. Criação de Estados e Cidades para testar a aplicação:
Acesse a aba "Content Manager" e selecione os collections type "Estado" e "Cidade" para criar novos registros de entrada, podendo associá-los facil e intuitivamente.

ou

### Se preferir, também pode utilizar as Rotas no Insomnia/Postman, através dos seguintes endpoints:

- **Estados**: `http://localhost:1337/api/estados`
- **Cidades**: `http://localhost:1337/api/cidades`
- **Pessoas**: `http://localhost:1337/api/pessoas`

### ** Exemplos de Métodos de Requisição**

- **GET**: Para listar todos os registros
- **POST**: Para criar novos registros
- **GET**: `http://localhost:1337/api/estados/:id` (o id se trata do campo `documentId` na response) - Para listar registros específicos
- **PUT**: `http://localhost:1337/api/estados/:id` (o id se trata do campo `documentId` na response) - Para atualizar registros específicos
- **DELETE**: `http://localhost:1337/api/estados/:id` (o id se trata do campo `documentId` na response) - Para deletar registros específicos

## Descrição do Backend

Este projeto teve o seu backend desenvolvido utilizando o Strapi V5 e possui os seguintes recursos:

### 1. Modelos Criados:

   - **Estado**: Representa as unidades federativas do Brasil.
   - **Cidade**: Representa as cidades, associadas a seus respectivos estados.
   - **Pessoa**: Representa os indivíduos, que podem ser associados a cidades.

### 2. Configuração dos Modelos:

   - Os modelos foram configurados para atender às regras do formulário, garantindo a integridade dos dados e a correta relação entre os diferentes modelos.

### 3. Restrições de Exclusão - Controllers:

   - **Cidade**: Não pode ser removida se houver uma pessoa associada a ela, evitando a perda de informações referenciadas.
   - **Estado**: Não pode ser removido se houver uma cidade associada a ele, garantindo que as hierarquias de localização sejam mantidas.

### 4. Acesso às APIs:
   - As APIs necessárias para o cadastro e gerenciamento dos modelos (Estado, Cidade, Pessoa) estão acessíveis publicamente, permitindo que usuários e sistemas externos interajam com os dados de forma segura e controlada.
