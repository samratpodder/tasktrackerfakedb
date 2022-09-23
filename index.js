const { request, response } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.port || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/tasks',(request,response)=>{
    fs.readFile('fakedb.json', 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        response.send(JSON.parse(data));
      });
})


app.listen(port,()=>console.log("Server Listening on Port "+port))