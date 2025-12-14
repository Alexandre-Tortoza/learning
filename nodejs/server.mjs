import { createServer } from "node:http";

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", "http://localhost");

  response.statusCode == 200;

  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  console.log(Buffer.concat(chunks).toString("utf-8"));

  if (request.method === "GET" && url.pathname == "/") {
    response.statusCode = 200;
  } else if (request.method === "POST" && request.url == "*") {
    response.statusCode = 201;
  } else {
    response.statusCode = 404;
    response.end("Page not Found");
    return;
  }
});

server.listen(3000, () => {
  console.log("\nServidor: http://localhost:3000\n");
});
