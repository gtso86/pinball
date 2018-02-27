# Pinball UI
> The  grid theme

## Overview
Aplicação feita para avaliação de skills técnicos de desenvolvimento de interface. Foi utilizado brifieng e arquivos enviados por e-mail há alguns dias atrás.

A principio desenvolvi o teste com um boilerplate desenvolvido pelo Google (Web Starter Kit) apenas para auxiliar um ambiente de prototipagem rápido e munido de task runner (Gulp).

Basicamente o teste foi realizado com HTML semantico, SASS como pre-processor e javascript puro. A IDE usada foi VSCode.

## Instalação

**tl;dr**: Clone o repositório `$ git clone https://github.com/gtso86/pinball.git` e rode o seguinte comando `$ npm install --global gulp && npm install` no diretório criado para iniciar.


## Pré requisitos

### [Node.js](https://nodejs.org)

Vá até o Terminal e digite `node --version`.
É necessário que Node retorne pelo menos a versão 0.10.x.
Caso ainda não tenha Node, vá em [nodejs.org](https://nodejs.org) e siga os passos para instala-lo.

### [Gulp](http://gulpjs.com)

Vá até o Terminal e digite `gulp --version`.
É necessário que Gulp retorne pelo menos a versão 3.9.x.
Caso você precise instalar/atualizar o seu Gulp, abra o terminal e digite o seguinte comando:

```sh
$ npm install --global gulp
```

### Dependências locais

A seguir, instale as dependências para rodar o projeto:

```sh
$ npm install
```

Pronto! Agora você já tem tudo para rodar a aplicação localmente.


# Comandos

Existem uma série de comandos para compilar ou testar a apicação:

### Observar arquivos

```sh
$ gulp serve
```

Isso criará um servidor local com um IP para acessar a aplicação, permitindo verificar toda alteração nos arquivos diretamente no browser.


### Compilar aplicação

```sh
$ gulp
```

Compila e otimiza os assets do projeto, deixando-o pronto para implantação.
