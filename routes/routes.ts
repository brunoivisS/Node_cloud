import { Router } from 'express';
import uploadGetRoutes from './uploadGet/uploadGet.routes';
import uploadPostRoutes from './uploadPost/uploadPost.routes';
const routes = Router();

routes.use(uploadGetRoutes.get("/uploads/:value"));
routes.use(uploadPostRoutes.post("/upload"));


routes.use((req, res) => {
    return res.status(404).send("Page not found.");
});
export default routes;

