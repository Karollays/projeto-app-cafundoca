# Restaurante Cafundóca com React 🍽️

# Índice
#### - [Descrição](#restaurante-react-resilia-modulo-5)
#### - [Tecnologias](#tecnologias)
#### - [Iniciando Projeto](#iniciando-projeto)
#### - [React Router Dom](#React-Router-Dom)
# Referências
#### - [Semantic-coomit](#Semantic-coomit)
#### - [Padrão de Pull Request](#Padrão-de-Pull-Request)
# Restaurante-react RESILIA MODULO 5

Esta aplicação irá administrar um sistema de restaurante localizado em Itajaí-SC, elaborado toda parte front-end produzida com ReactJs. Assim sendo, é possível logar, cadastrar clientes, produtos,funcionários, fornecedores, fazer pedidos e até mesmo, fazer uma lista de compras.

# Tecnologias

Neste projeto utilizamos tudo o que aprendemos nas aulas do 4 modulo,
que é voltado para desenvolvimento back-end, sendo elaborada uma 
API-Rest utilizando Node.js. Posteriormente, no módulo 5, consumimos a api 
criando toda parte front-end com a biblioteca React.

- [ReactJs](https://pt.wikipedia.org/wiki/React_(JavaScript))

O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web.

- [CSS](https://pt.wikipedia.org/wiki/Cascading_Style_Sheets)

Toda estilização do projeto foi feito com o mecanismo CSS. Este tem uma sintaxe simples, e utiliza uma série de palavras em inglês para especificar os nomes de diferentes propriedade de estilo de uma página.

- [Netlify](https://en.wikipedia.org/wiki/Netlify)

A Netlify é uma empresa de computação em nuvem com sede em San Francisco que oferece hospedagem e serviços de back-end sem servidor para aplicativos da web e sites estáticos .

# Iniciando projeto

Neste projeto utilizamos o Netlify para hospedar nosso projeto React. Porém, para iniciar remotamente
após o clone dos arquivos, abra o terminal de seu editor ou em sua máquina e utilize os seguintes
comandos.

Passo 1 - Instalando as dependências do Node_Modules

```bash
npm install
```
Passo 2 - Iniciando projeto

```bash
npm start 
```

# React-Router-Dom

 Foi utilizado também o pacote react-dom que provê métodos específicos para o DOM que podem ser usados no nível superior de sua aplicação como uma válvula de escape para sair do modelo do React. A maioria de seus componentes não devem precisar deste módulo.
# Semantic-coomit

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html

# Padrão de Pull Request
 
Inclua um resumo da mudança e qual problema foi corrigido. Inclua também a motivação e o contexto relevantes. Liste todas as dependências necessárias para esta mudança.
 
Correções # (problema)
## Tipo de mudança

```md
Exclua as opções que não são relevantes.
 
- [ ] Correção de bug (alteração ininterrupta que corrige um problema)
- [ ] Novo recurso (mudança ininterrupta que adiciona funcionalidade)
- [ ] Mudança violenta (correção ou recurso que faria com que a funcionalidade existente não funcionasse como esperado)
- [ ] Esta mudança requer uma atualização de documentação
 # Lista de controle:
 
- [ ] Meu código segue as diretrizes de estilo deste projeto
- [ ] Eu fiz uma autoavaliação do meu próprio código
- [ ] Comentei meu código, especialmente em áreas de difícil compreensão
- [ ] Fiz as alterações correspondentes na documentação
- [ ] Minhas alterações não geram novos avisos
- [ ] Eu adicionei testes que provam que minha correção é eficaz ou que meu recurso funciona
- [ ] Testes de unidade novos e existentes são aprovados localmente com minhas alterações
- [ ] Quaisquer alterações dependentes foram mescladas e publicadas nos módulos downstream
```

