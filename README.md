# Desafio Cielo

Bem-vindo ao meu projeto! 

## Instruções de Teste

Para testar este projeto, clone o projeto, utilize a branch de **main**, utilize a versão **v18.17.1** do node e siga os seguintes passos:

### 1. Instalação

Antes de executar o projeto ou os testes, é necessário instalar as dependências. Abra o terminal e navegue até o diretório raiz do projeto e execute o seguinte comando:

```bash
npm install
```
Este comando instalará todas as dependências necessárias.

### 2. Execução do Projeto
Para executar o projeto em modo de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```
Isso iniciará o servidor de desenvolvimento e você poderá acessar o projeto no seu navegador.
Utilize o link: 
```bash
http://localhost:5173/
```

### 3. Testes com Jest
O projeto inclui testes unitários usando o framework Jest. Para executar os testes, utilize o seguinte comando:

```bash
npm run test
```
Isso iniciará a execução dos testes e fornecerá os resultados no terminal.

### 4. Testes com Cypress
Os testes de integração são realizados com o Cypress. Para executar os testes com o Cypress, siga estas etapas:

Certifique-se de que o projeto esteja em execução em um terminal separado (use npm run dev).

Em outro terminal, execute o seguinte comando:

```bash
npm run cypress
```
Isso abrirá a janela do Cypress. 

Clique em -> E2E Testing

Utilize o navegador electron e clique em start.

Clique no nome do arquivo de teste que você deseja executar e os testes serão executados no navegador.
