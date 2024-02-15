const express = require('express')
const app = express()


 const hostname = '127.0.0.1';
 const port = 3000;

 let products = [];

 app.post('/post', function (req:any, res:any) {
                                               res.statusCode = 200;
                                               res.setHeader('Content-Type', 'text/plain');
                                               res.end('You cannot post anything');
                                               });

 app.put('/put', function (req:any, res:any) {
                                             res.statusCode = 200;
                                             res.setHeader('Content-Type', 'text/plain');
                                             res.end('You cannot chage anything');
                                             });

 app.delete('/delete', function (req:any, res:any) {
                                                   res.statusCode = 200;
                                                   res.setHeader('Content-Type', 'text/plain');
                                                   res.end('there is nothing for you to delete')
                                                   });

 app.get('/', (req:any, res:any) => {
                                    res.statusCode = 200;
                                    res.setHeader('Content-Type', 'text/plain');
                                    res.end('Hello World');
                                    })
 app.get('/ping', (req:any, res:any) => {
                                        res.statusCode = 200;
                                        res.setHeader('Content-Type', 'text/plain');
                                        res.end('Pong')
                                        })


 app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });