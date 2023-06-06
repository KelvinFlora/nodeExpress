const http = require("http");
const port = 3000;

const server = http.createServer((request, response) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end();
});

server.listen(port, () => {
  console.log(`O servidor está escutando em http://localhost:${port}`);
});