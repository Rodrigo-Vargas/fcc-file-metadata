'use strict';

module.exports = function (app, db) {
  var multer = require('multer');
  var upload = multer({ dest: '/tmp/'});

  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
  });

  app.get('/upload', function(req, res) {
    res.sendFile(process.cwd() + "/" + "index.html" );
  });

  app.post('/file_upload', upload.single('file'), function (req, res, next) {
    res.end( JSON.stringify( { 'file_size' : req.file.size } ) );
  })
}
