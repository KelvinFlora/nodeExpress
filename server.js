const http = require("http");
const port = 3000;

const routes = {
  "/": "Curso de Node",
  "/comidas": "Página de comidas",
  "/cliente": "Listagem de clientes",
  "/bebidas": "página de bebidas",
};

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(routes[request.url]);
});

server.listen(port, () => {
  console.log(`O servidor está escutando em http://localhost:${port}`);
});
