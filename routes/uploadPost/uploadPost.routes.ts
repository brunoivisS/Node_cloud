require('dotenv').config({path: '.env'});
import { Router } from 'express';
import multer from 'multer';
import Upload from '../../controller/uploadPost/uploadPost'
import {storage} from '../../config/multer.config';

const upload = multer({ storage: storage});
//in form necessity a input with name file to not crashed the sys
const type = upload.single("file");
const uploadPostRoutes = Router();

uploadPostRoutes.post("/upload",type,(req, res) => { 
            try {
                const uploadF = new Upload();
                uploadF.uploadfile(req,res);
            } catch (err) {
                return res.status(500).send("<html><head><title>Erro interno do servidor</title></head><body><h1>Erro interno do servidor</h1><p>O servidor encontrou um erro interno que o impediu de atender à solicitação.</p></body></html>");
        }
});
export default uploadPostRoutes;