import { createServer } from "node:http";

const frase1 = Promise.resolve("Ola ");
const frase2 = Promise.resolve("Mundo!");
const frases = [];

const frasesPromises = [frase1, frase2];

for await (const frase of frasesPromises) {
  frases.push(frase);
}

// console.log(frases.join(""));

const part1 = Buffer.from("Ola ");
const part2 = Buffer.from("Mundo!");

const final = Buffer.concat([part1, part2]);
console.log(final);
console.log(final.toString("utf-8"));

const server = createServer((request, response) => {
  const url = new URL(request.url || "/", "http://localhost");

  response.statusCode == 200;

  if (request.method === "GET" && url.pathname == "/") {
    response.statusCode = 200;
  } else if (request.method === "POST" && request.url == "*") {
    response.statusCode = 201;
  } else {
    response.statusCode = 404;
    response.end("Page not Found");
    return;
  }

  response.setHeader("Content-Type", "text-html");
  response.end("Hello World!");
});

server.listen(3000, () => {
  console.log("\nServidor: http://localhost:3000\n");
});
