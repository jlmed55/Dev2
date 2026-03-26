import {  Router } from "express";

const routes = Router();

routes.get("/teste", ( resquest, response) => {
   return response.status(200).json({
     message :"Endpoint de teste funcionando"
   })
});

export default routes;