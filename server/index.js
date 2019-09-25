const express = require('express');
const jsonParser = require('body-parser').json();

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send('Hello word!'));

app.post('/signin', jsonParser, (req, res) => {
    // res.send(req.body.name);//gửi về một text
    res.send(req.body);//gửi về nguyên cai form
})

app.listen(3000, () => console.log("Server is running"));