// Step 1: Import json-server
const jsonServer = require('json-server');

// Step 2: Create an instance of jsonServer
const server = jsonServer.create();

// Step 3: Create middleware
const middleware = jsonServer.defaults();

// Step 4: Create router
const router = jsonServer.router('db.json');

// Step 5: Use middleware and router
server.use(middleware);
server.use(router);

// Step 6: Define Port
const PORT = process.env.PORT || 3000;

// Step 7: Listen
server.listen(PORT, () => {
  console.log(`The JSON Server is running on port ${PORT}`);
});
