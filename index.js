const express = require("express"); 
const app = express(); 

// Rota inicial
app.get("/", function(req, res) {
    res.send("<h1>Vim aqui fazer a prova, já meio mufino</h1>");
});

// Rota /lista
app.get("/lista", function(req, res) {
    res.send(`
        <h1>Para um dia de aula temos</h1>
        <p>Caneta, caderno, água e rivotril</p>
    `);
});

// Rota /pedido
app.get("/pedido", function(req, res) {
    res.send("<h1>Me passa, nem que seja por pena</h1>");
});

app.listen(process.env.PORT ?? 2424, function(erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
});
