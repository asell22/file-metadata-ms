var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

app.use(express.static('public'));
app.use(multer().single('file-to-analyze'));

app.post('/api/fileanalyze', function(req, res, next) {
   var name = req.file.originalname;
   var size = req.file.size + ' bytes';
   res.send({
      name: name,
      size: size
   }); 
});

app.listen(process.env.PORT, function() {
   console.log('Server listening on port', process.env.PORT); 
});