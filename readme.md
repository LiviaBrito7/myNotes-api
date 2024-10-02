# My Notes API

## Descrição

My Notes é uma API desenvolvida em Node.js com Prisma e JavaScript. Esta API permite que os usuários criem, editem, excluam e listem notas pessoais. Além disso, implementa autenticação com JWT e armazenamento seguro de senhas com bcrypt.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **JavaScript**: Linguagem de programação utilizada para desenvolver a lógica do servidor e interagir com o cliente.
- **Prisma**: ORM para interagir com o banco de dados MySQL.
- **MySQL**: Sistema de gerenciamento de banco de dados utilizado.
- **JWT (JSON Web Token)**: Para autenticação de usuários.
- **bcrypt**: Para hash e comparação de senhas.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/LiviaBrito7/myNotes-api.git
cd my-notes-api
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo .env:

Crie um arquivo .env na raiz do projeto com a seguinte configuração:

```plaintext
DATABASE_URL="mysql://user:password@localhost:3306/my_database"
JWT_SECRET="your_jwt_secret"
```

**Nota**: Substitua your_jwt_secret por um segredo forte para geração dos tokens JWT.

### Migrations e banco de dados:

Rode as migrations para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
```

Inicie o servidor:

```bash
npm run dev
```

O servidor estará rodando em http://localhost:3000.

## Endpoints

### Autenticação

#### Registro de usuário
- **URL**: `/users/register`
- **Método**: POST
- **Body**:
```json
{
  "name": "Seu Nome",
  "email": "email@example.com",
  "password": "senha-segura"
}
```

#### Login de usuário
- **URL**: `/users/login`
- **Método**: POST
- **Body**:
```json
{
  "email": "email@example.com",
  "password": "senha-segura"
}
```
- **Resposta**: JWT Token
```json
{
  "token": "seu_jwt_token"
}
```

### Usuário Autenticado

#### Verificar o usuário autenticado
- **URL**: `/users/me`
- **Método**: GET
- **Headers**: `Authorization: Bearer <token>`

#### Listar usuários
- **URL**: `/users`
- **Método**: GET
- **Headers**: `Authorization: Bearer <token>`

### Editar usuário

#### Atualizar usuário
- **URL**: `/users/:id`
- **Método**: PUT
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "name": "Novo Nome",
  "email": "novoemail@example.com",
  "password": "nova-senha-segura" 
}
```

### Deletar usuário

#### Excluir usuário
- **URL**: `/users/:id`
- **Método**: DELETE
- **Headers**: `Authorization: Bearer <token>`
- **Resposta**:
```json
{
  "message": "Usuário excluído com sucesso."
}
```

### Notas

#### Criar uma nota
- **URL**: /notes
- **Método**: POST
- **Headers**: Authorization: Bearer <token>
- **Body**:
```json
{
  "title": "Minha nota",
  "content": "Este é o conteúdo da nota."
}
```

#### Listar notas
- **URL**: /notes
- **Método**: GET
- **Headers**: Authorization: Bearer <token>

#### Atualizar uma nota
- **URL**: /notes/:id
- **Método**: PUT
- **Headers**: Authorization: Bearer <token>
- **Body**:
```json
{
  "title": "Novo título",
  "content": "Novo conteúdo"
}
```

#### Excluir uma nota
- **URL**: /notes/:id
- **Método**: DELETE
- **Headers**: Authorization: Bearer <token>

