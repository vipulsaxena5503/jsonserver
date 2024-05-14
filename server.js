const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const path = require('path');
console.log("__dirname is:", __dirname);

const router = jsonServer.router(path.join(__dirname, 'db.json')); // Path to the db.json file

console.log("router is:", router);

const middlewares = jsonServer.defaults();

// CORS options—set to allow all origins for testing purposes
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));
server.use(middlewares);
server.use(router);

  
const port = process.env.PORT || 3000; // Use PORT environment variable or default to 3000
server.listen(port, '0.0.0.0', () => {
    console.log(`JSON Server is running on port ${port}`);
});

