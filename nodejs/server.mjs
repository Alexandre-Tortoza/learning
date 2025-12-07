import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.end("Ola Mundo!");
});

server.listen(3000, () => {
  console.log("\n\nServidor ativo!");
  console.log("\nhttp://localhost:3000");
});
