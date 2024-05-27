# Search dev

## Descrição

Este projeto é uma aplicação Angular que busca o perfil de desenvolvedores na API pública do GitHub e exibe os seus dados em uma página de perfil.

## Tecnologias Utilizadas

- Angular v15
- PrimeNG
- ngx-toastr
- Node.js v18.14

## Instalação

Antes de começar, você precisa ter o Node.js v18.14 instalado na sua máquina.

1. Clone este repositório:
git clone <link do repositório>

3. Navegue até a pasta do projeto e instale as dependências:
cd <nome do projeto> npm install

## Execução

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
 ng serve

A aplicação estará disponível em `http://localhost:4200`.

## Construção

Para construir a aplicação para produção, execute o seguinte comando:
 ng build --prod
 
Os arquivos de construção estarão disponíveis na pasta `dist/`.

## Motivação das Escolhas Técnicas

- **Angular**: Escolhi o Angular pela sua robustez e pelo suporte à programação reativa, que facilita o gerenciamento de estado da aplicação.
- **PrimeNG**: Utilizei o PrimeNG por ser uma biblioteca de componentes rica e completa para Angular. No entanto, optei por não usar os componentes do PrimeNG em algumas partes do código para ter mais controle sobre o comportamento e o estilo desses elementos.
- **ngx-toastr**: Escolhi o ngx-toastr para exibir mensagens de notificação na aplicação de forma elegante e consistente.

## Estrutura do Projeto

Esse projeto tem uma estrutura simples de apenas um modulo, pois se trata de uma aplicação de pequeno porte e facilita a leitura do projeto.


## Licença

Feito por Felipe Alves Paixão de Jesus
