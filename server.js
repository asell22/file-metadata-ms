var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

app.use(express.static('public'));
app.use(multer().single('file-to-analyze'));

app.post('/api/fileanalyze', function(req, res, next) {
   console.log(req.file);
   res.send(); 
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log('Server listening on port', process.env.PORT); 
});