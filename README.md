# Pré requisitos

Download and Install Node & NPM: https://nodejs.org/en/

Download and install GIT: https://git-scm.com/downloads

# Instalação

```
npm install
```

# Iniciar servidor de desenvolvimento

```
npm run dev
```

# Compilar versão de produção

```
npm run build
```

# Iniciar servidor de produção

```
npm run start
```

## Páginas

As rotas são definidas pelos nomes dos arquivos dentro da pasta `/pages/. Basta criar o arquivo.

index.jsx é a /
about.jsx é /about
contact.jsx é /contact

- Se precisar fazer rota dinamica, com parametro, te indico uns tutoriais.
  \*\* Existem duas páginas \_app.jsx e \_document.jsx que são obrigatórios. Sugiro não alterar muitas coisas por lá.

## Components

Referentes a página inicial (mockup): BoxLeft, BoxRight, BoxInputs
Referentes a estrutura do layout: Layout, Header, Page
Referentes aos dados e apis: Store

## Breve Resumo

Os arquivos executam na seguinte ordem:

.. pages/_document.jsx

.... pages/_app.jsx (children of _document.jsx)

...... components/Store.jsx (children of _app.jsx)

........ components/Layout.jsx (children of Store.jsx)

........ components/Header.jsx & Page.jsx (childrens of Layout.jsx)

.......... index.jsx (children of page)

............ components/BoxLeft.jsx & components/BoxRight.jsx & components/BoxInputs.jsx (childrens of index.jsx)


Existe um objeto global, que é chamado de `state`. Este `state` é definido dentro do arquivo `components/Store`. A ideia é que este estado esteja acessivel em todos os components e páginas que estejam abaixo dele. Você vai perceber que as páginas e os components de layout recebem `state` e `changeState` como propriedades provientes do component `components/Store.jsx`.

Desta maneira podemos utilizar o metodo `changeState` em qualquer lugar, para alterar o conteudo do `state`, e mágicamente disparar uma reação automática e atualizar em todos os lugares que estava usando os valores presentes em `state`.
Se você observar nos arquivos `components/BoxLeft.jsx` e `components/BoxRight.jsx`, o `state` é simplesmente utilizado. Caso ele existe, mostro a imagem e o texto dinamico disponivel dentro do objeto `state`.

Abra o arquivo `components/BoxInputs.jsx` e repare que neste arquivo existe um mecanismo muito semelhante ao anterior. Temos o `input` e o `setInput`. Existe também `TextField` que toda vez que é atualizado `onChange` altera o valor do `input` através do método `setInput`.
E para finalizar, existe um botão que quando clicado enviar o valor do `input` para a função `changeState`, que vai buscar na API o state adequado para o input providenciado (Veja essa função `changeState` no arquivo `components/Store.jsx` para entender melhor)


Em resumo: 
1. usuário digita no campo de texto, o valor de `input` é atualizado.
2. usuário clica no botão e o valor do input é enviado pela função `changeState`
3. a função busca os dados do usuário na API e atualiza o valor do `state`
4. todo o aplicativo é atualizado, em todos os lugares que voce utilizou o state
5. usuario clica no botao limpar, o `state` é zerado, e os dados somem.

## Frameworks utilizados

Veja a documentação, principalmente do material-ui para saber como utilizar os components visuais e customizar cores, tamanhos, fontes e etc...

Estrutura: https://nextjs.org/
Estilo & Components: https://material-ui.com/