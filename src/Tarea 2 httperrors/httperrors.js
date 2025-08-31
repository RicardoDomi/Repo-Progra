const http = require('http');
const PORT = 3000;
const users = [
    { name: 'Ricardo', cellphone: '3323643989', email: 'rdomi@yahoo.com' }
]; 

const teachers = [
    { id: '1', name: 'Jafet', materia: 'Programacion' }
];

const server = http.createServer((req, res) => {

    try {
        const url = req.url;
        const method = req.method;

        console.log(`Petición: ${method} ${url}`);

        if (url === '/test' && method === 'GET') {

            if (users.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'No se encontraron usuarios' }));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        } else if (url === '/teachers' && method === 'GET') {
            if (teachers.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'No se encontraron profesores' }));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(teachers));
        } else if (url === '/simulate-500' && method === 'GET') {
            throw new Error('Error interno simulado');
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Not Found' }));
        }
    } catch (err) {
        console.error('Algo salió mal:', err.stack);
        if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
        }
        res.end(JSON.stringify({ error: 'Error interno del servidor' }));
    }
});

server.listen(PORT, () => {
    console.log(`El servidor está listo en http://localhost:${PORT}`);
    console.log('\n¡Intenta entrar a estas direcciones para ver qué pasa!');
    console.log(`  - http://localhost:${PORT}/test`);
    console.log(`  - http://localhost:${PORT}/teachers`);
    console.log(`  - http://localhost:${PORT}/simulate-500`);
    console.log(`  - http://localhost:${PORT}/cualquier-otra-cosa`);
});