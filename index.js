var expresss = require('express'),
    app = expresss(),
    dotenv = require('dotenv'),
    bodyParser = require('body-parser');

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send('Hello world')

})

app.get('/aqib', function(req, res){
    res.send('aqib say hi')
})

app.get('/aqib/anotherendpoint', function(req, res){
    res.send('i say hi again')
})

app.post('/aqib', function(req, res){
    var text = req.body.text;
    console.log('Text is ' + text);
    res.json({
        key : text,
        hello: 'whats up bij',
        extra: 'hello'
    })

})
app.set('port', process.env.PORT);
var server = app.listen(app.get('port'), function(){
    console.log('aqib server is listening on port ' + server.address().port); //this is calling port 3000 within the machine which acts like entrance for the application
})
