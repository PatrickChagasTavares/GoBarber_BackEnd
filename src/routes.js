import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({
    message: "Hello World, my name is Patrick, I'am phone develop",
  });
});

export default routes;
