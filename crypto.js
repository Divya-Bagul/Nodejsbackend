// import chalk from 'chalk';
// import colors from 'colors';
// import http from 'http';
// import data from './data';
//import only works when we put type:"module in packaghe.json and when we put this type:"module" in pacage.jsone we can not use require
const http = require('http');
const data = require('./data');


// const crypto = require('crypto'); 
// const colors = require('colors');
// const chalk = require('chalk');

const secret = 'abcdefg';  
// const hash = crypto.createDiffieHellman('3', "hjgjh");
// // console.log(hash);  
// console.log(colors.green('hello'));
// console.log('hello'.blue);
// console.log('hello'.bgBlue);
// console.log('hello'.bgGreen);

// console.log(chalk.blue('Hello world!'));
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write('<h1>Static Api</h1>');
    res.write(JSON.stringify({name:"divya",email:'d@gmail.com'}));
    res.write(JSON.stringify(data));


    res.end();
}).listen(5000);

