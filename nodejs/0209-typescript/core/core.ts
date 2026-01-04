import { createServer, type Server } from 'node:http';
import { Router } from './router.ts';
import { customRequest } from './http/custom-request.ts';
import { customResponse } from './http/custom-response.ts';

const router = new Router();

class core{
  router: Router
  server: Server


  constructor(){
    this.router = new Router();
    this.server = createServer(this.handler)
  }

  hamdler = async (request: IncomingMessage, response: ServerResponse) => {
  const req = await customRequest(request);
  const res = customResponse(response);

  const handler = router.find(req.method || '', req.pathname);
  if (handler) {
    handler(req, res);
  } else {
    res.status(404).end('Não encontrada');
  }
}
}

const server = createServer();

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
