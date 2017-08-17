var express = require('express'),
	app = express();

app.set('port', (process.env.PORT || 5001));

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req,res){
	res.render('/index.html')
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});