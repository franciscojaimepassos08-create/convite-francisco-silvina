# Convite de Casamento — Francisco & Silvina

Convite digital responsivo, preparado para publicação na Vercel.

## Personalização

O botão **Personalizar** abre um painel que permite:
- carregar uma fotografia para o fundo da capa;
- carregar uma fotografia para a secção dos detalhes;
- escolher uma das três paletas (creme/castanho/dourado);
- ajustar a intensidade da sobreposição nas fotografias;
- guardar as escolhas no navegador através de `localStorage`.

**Importante:** as fotografias escolhidas no painel ficam guardadas apenas no navegador e dispositivo onde foram carregadas. Para que todos os convidados vejam as mesmas fotografias, coloca os ficheiros na pasta do projeto e define os caminhos no `script.js`/`style.css` antes de publicar novamente na Vercel.

## Dados do casamento

Os dados editáveis estão no início de `script.js`, no objeto `WEDDING`:
- data e hora: 24 de dezembro de 2026, às 17h00;
- local: Sala Magna, Universidade Lúrio, Cidade de Nampula;
- confirmação: WhatsApp configurado.

## Publicar na Vercel

1. Extrai a pasta `convite-francisco-silvina`.
2. Entra em https://vercel.com e inicia sessão.
3. Cria um novo projeto e importa a pasta/repositório, ou usa a opção de deploy por CLI.
4. Como é um site estático, não precisa de comando de build; a pasta raiz é a própria pasta do projeto.
5. Conclui o deployment e testa o convite no telemóvel.

Não é necessário instalar dependências.
