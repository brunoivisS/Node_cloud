import { Router } from 'express';
import uploadGetRoutes from './uploadGet/uploadGet.routes';
import uploadPostRoutes from './uploadPost/uploadPost.routes';
const routes = Router();

routes.use(uploadGetRoutes.get("/uploads/:value"));
routes.use(uploadPostRoutes.post("/upload"));


routes.use((req, res) => {
    return res.status(403).send("<h1>you aren't permission to acess this page!</h1>") 
});
export default routes;

