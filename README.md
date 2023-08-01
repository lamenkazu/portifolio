# Sobre o Projeto

Esta aplicação foi desenvolvida em React com CSS3 puro. Apesar de simples, não se trata apenas de uma página estática, mas sim de uma experiência totalmente reativa, projetada para agradar a qualquer usuário curioso, tendo responsividade para qualquer tipo de tela em sua estilização.

O menu de navegação é alterado automaticamente conforme você explora a página. Cada projeto do portfólio é apresentado dinamicamente em uma grid, com espaço dedicado a cada um, mesmo durante a expansão. Com apenas alguns cliques, você pode acessar meu currículo, entrar em contato por e-mail, enviar uma mensagem no WhatsApp ou até mesmo me enviar uma mensagem direta através do próprio portfólio, a qual eu posso verificar rapidamente.

Todo o código está disponível em meu GitHub, e se você é um desenvolvedor e deseja saber como implementei algumas funcionalidades, sinta-se à vontade para utilizá-lo. É claro que estou sempre buscando melhorias, e em breve todo o conteúdo estará configurado em arquivos de dados, possibilitando a tradução da página para outras línguas, entre outras mudanças.

## Como Rodar

Se você fez o download dos arquivos desse repositório e não sabe como rodar uma aplicação react, aqui está um breve tutorial:
- Primeiro, você precisa ter o Node instalado em sua máquina.
- É necessário que você instale o node_modules no Folder onde o projeto se encontra. Para isso, você precisa abrir o terminal na pasta do projeto e rodar o comando: npm i
- Feito isso, basta rodar o comando "npm start" e o site irá rodar em uma porta LocalHost. 

## Em caso de problemas
Se você por acaso teve problema com a porta de escolha automática, você precisa alterar a 
porta de escolha no arquivo vite.config.js, de uma forma similar a esta:
 export default defineConfig({
  // ...configurações ja feitas
  server: {
    port: 3006,
  },
});