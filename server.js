const express = require("express");
const app = express();
 
// обработка запроса по адресу /about
app.get("/", function(request, response){
    response.send("<a href = />Главная</a> <a href = /about>О нас</a> <a href = /contact>Контакты</a> <h1>Добро пожаловать на нашу страницу!</h1>");

});

// обработка запроса по адресу /contact
app.use("/about", function(request, response){
     
    response.send("<a href = />Главная</a> <a href = /about>О нас</a> <a href = /contact>Контакты</a> <h1>Мы учимся в Вятгу! Это лучший ВУЗ мира!</h1>");
});

// обработка запроса к корню веб-сайта
app.get("/contact", function(request, response){
     
    response.send("<a href = />Главная</a> <a href = /about>О нас</a> <a href = /contact>Контакты</a> <h1>Мы есть в ВК и Одноклассниках!</h1>");
});

app.listen(3000);