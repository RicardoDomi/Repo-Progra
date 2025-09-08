const users = require('../models/userModel');
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/user' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(user));
    }
})
server.listen(port,()=>{
    console.log('Servidor correiendo en puerto '+ port);
})
