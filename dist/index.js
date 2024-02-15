"use strict";
// https://nodejs.org/en/docs/guides/getting-started-guide/
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express')
// same as:
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/pin') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Pong');
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
/* ==== Subjective Observation 00: ====
   what the server is, and the host
   beigns apper to be at line 12.
   at the same time the server gets
   created, its inictial routing also
   gets established, as its parameter.
   interestingly within the body here,
   we are also able to establish
   conditional rout depending on the url.
   lastly, on line 25 and onwords, seem
   to establish the inicial ip-address.
   ====================================*/ 
