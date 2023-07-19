require('dotenv').config({path: '.env'});
import { Router } from 'express';
import File from '../../controller/uploadGet/uploadGet';
const uploadGetRoutes = Router();

uploadGetRoutes.get("/uploads/:value", ( req, res) => {
    try {
        const fileR = new File();
        fileR.returnFile(req,res);
    } catch (err) {
        return res.status(500).send("<html><head><title>Erro interno do servidor</title></head><body><h1>Erro interno do servidor</h1><p>O servidor encontrou um erro interno que o impediu de atender à solicitação.</p></body></html>");
    }
   });

export default uploadGetRoutes;