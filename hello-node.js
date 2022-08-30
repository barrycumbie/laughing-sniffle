const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

console.log('hello from node');

var thatData = '   ';

app.get('/', function(req, res) {
    // res.send('<h2>Hello World fr1om Express</h2>')
    // res.sendFile(path.join(__dirname, 'index.html'));
    res.render('index', { thatData: req.body.thatData });

})

app.post("/saveToNode", (req, res) => {
    console.log(req.body);
    console.group(req.body.thatData);
    res.render('index', { thatData: req.body.thatData });

})

app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));