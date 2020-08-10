#language: pt
#encoding: UTF-8
Funcionalidade: Verificar os dados do tempo utilizando o aplicativo weather-app

  Cenário: Acessar o aplicativo em algum dia específico
    Dado que hoje é quarta-feira
    E estou em São Paulo
    Quando acesso o aplicativo
    Então encontro os dados do tempo referente ao dia 
    E referente ao local