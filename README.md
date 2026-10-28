# eslint-config-lucastakeo

Uma configuração adaptável do ESLint 9, no formato flat config, inspirada nas
regras de estilo da Rocketseat. O pacote oferece presets para JavaScript,
TypeScript e React. Aspas, ponto e vírgula, indentação e outras preferências são
configuráveis por projeto.

## Desenvolvimento

```sh
npm install
npm run check
npm pack --dry-run
```

## Instalação pelo GitHub

Depois de criar o repositório `lucastakeo-dev/eslint-config-takeo`, enviar
este projeto e criar a tag `v0.1.0`, instale assim no projeto consumidor:

```sh
npm install --save-dev eslint@^9 github:lucastakeo-dev/eslint-config-takeo#v0.1.0
```

O pacote traz os plugins que usa. Projetos TypeScript também precisam da
própria dependência `typescript`.

## Preset base

```js
// eslint.config.js
import { createConfig } from 'eslint-config-lucastakeo'

export default createConfig({
  style: {
    singleQuote: true,
    semi: false,
    tabWidth: 2,
  },
})
```

## Preset React

```js
// eslint.config.js
import { createReactConfig } from 'eslint-config-lucastakeo/react'

export default createReactConfig({
  style: { singleQuote: true, semi: false },
})
```

O preset React aplica as regras base a arquivos JS/TS e ativa regras React,
Hooks e acessibilidade em `.jsx` e `.tsx`. Use `files` e `reactFiles` para
alterar esses escopos. Em projeto somente JavaScript, passe `typescript: false`.

As opções de estilo são `printWidth`, `tabWidth`, `singleQuote`,
`trailingComma`, `arrowParens`, `semi` e `endOfLine`.

## Créditos

As opções padrão de estilo foram adaptadas da configuração pública
[`@rocketseat/eslint-config`](https://github.com/Rocketseat/eslint-config-rocketseat),
publicada sob licença MIT. Esta é uma implementação independente para flat
config e não é afiliada à Rocketseat.
