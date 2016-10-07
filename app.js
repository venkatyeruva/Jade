var express = require("express"), stylus=require("stylus"),nib=require('nib')

var app = express();

var _dirname = "Jade";

function compile(str,path){
	return stylus(str).set('filename',path).use(nib());
}
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(express.logger('dev'))
app.use(stylus.middleware({
	src: _dirname+'/public',
	compile: compile
}));
app.use(express.static(__dirname+'/public'))


app.get('/', function (req, res) {
  res.render('index',
            { title : 'Dashboard' }
  )
})

app.get('/Users', function (req, res) {
  res.render('Users',
        { title : 'Users' }
  )
})
/*
app.get('/', function (req, res) {
  res.end('Hi there!')
})
*/
app.listen(3000)
