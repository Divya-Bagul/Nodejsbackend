var http = require('http');
var data = require('./datetime.js');
var fs = require('fs');
var url = require('url');
var uc = require('upper-case');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
var readStream = fs.createReadStream('./mynewfile2.txt');









var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'se25.webdataguru@gmail.com',
    pass: 'WDG@123#' 
  }
});

var mailOptions = {
  from: 'se25.webdataguru@gmail.com',
  to: 'divyapbagul@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// /*Write to the console when the file is opened:*/
// readStream.on('open', function () {
//   console.log('The file is open');
// });


// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

//Assign the eventhandler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');
// var content = "sdfsdfsdfdfdsfsdfsfsdsdsdddsdsdsdsdsd";
// http.createServer(function (req, res) {

//     fs.readFile('demofile1.html', function(err, datafile) {
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data.mydate());
//             res.write(uc.upperCase("Hello World!"));
//             return res.end();
//             console.log('sd');
//     });

    
    // fs.appendFile('mynewfile1.txt', content, function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
      // fs.open('mynewfile2.txt', 'w', function (err,file) {
      //   if (err) throw err;
      //   console.log('Savedfile!');
      // });
      // fs.writeFile('mynewfile1.txt', content, function (err,file) {
      //   if (err) throw err;
      //   console.log('Savedfile!');
      // });
      // fs.unlink('mynewfilenew.txt', function (err,file) {
      //   if (err) throw err;
      //   console.log('Delete file!');
      // });
      // fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
      //   if (err) throw err;
      //   console.log('File Renamed!');
      // });

//       var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);
// var q1 = url.parse(req.url, true);

// console.log(q1);





//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       console.log(files);
//       var oldpath = files.filetoupload.filepath;
//       console.log(oldpath);
//       var newpath = 'D:/' + files.filetoupload.originalFilename;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
// } else {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }

// }).listen(8080);