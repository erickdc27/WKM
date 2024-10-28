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
- PostgreSQL (instalado e em execução)

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
### 3. Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e utilize o conteúdo do arquivo .env.example
obs: Adicione as variáveis necessárias para a conexão com o seu Banco de Dados instalado localmente e em execução (sugestão - postgres)

### 4. Inicie a aplicação:
```bash
npm run develop
```
### 5. Acesse o painel de administração do Strapi:
Abra o navegador e acesse o caminho `http://localhost:1337/admin` para criar o seu Super Admin e poder gerenciar os dados dos modelos criados.

### 6. Liberação do acesso público das APIs necessárias para cadastro:
Acesse o caminho Settings/Users & Permissions Plugin/Roles/Public e selecione a opção "all" do campo "permissions" para cada modelo/API (Cidade, Estado, Pessoa).

### 7. Criação de Estados e Cidades para testar a aplicação:
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
