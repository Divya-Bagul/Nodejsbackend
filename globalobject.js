// console.log(__dirname);
// console.log(__filename);
// console.error('sdsdf');
// buf = new Buffer.alloc(256);  
// len = buf.write("Simply");  
// console.log("Octets written : "+  len);  
// // setInterval(function() {  
// //     console.log("setInterval: Hey! 1 millisecond completed!..");   
// // //    },1000);
// setTimeout(function() {  
//     console.log("timeout: Hey! 1 millisecond completed!..");   
//    }, 5000); 
   
//    var http = require("http");
//    http.createServer(function (request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     setInterval(function() {  
//         response.write("setInterval: Hey! 1 millisecond completed!..");   
//        },1000);
    
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
//  }).listen(8081);
 
//  // Console will print the message
//  console.log('Server running at http://127.0.0.1:8081/');
//  function welcome () {  
//     console.log("Welcome to JavaTpoint!");  
//   } 
//   function welcome11 () {  
//     console.log("Welcomeasdasdasdasdadasdasdd to JavaTpoint!");  
//   }  
//   var id1 = setTimeout(welcome,1000);  
//   var id2 = setImmediate(welcome11);  
//  clearTimeout(id1);  
//  clearImmediate(id2);

try {  
    const a = 1;  
    const c = a + b;  
  } catch (err) {  
    console.log("err");  
  }  