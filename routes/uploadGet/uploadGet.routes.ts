require('dotenv').config({path: '.env'});
import { Router } from 'express';
import File from '../../controller/uploadGet/uploadGet';
const uploadGetRoutes = Router();

uploadGetRoutes.get("/uploads/:value", ( req, res) => {
    try {
        const fileR = new File();
        fileR.returnFile(req,res);
    } catch (err) {
        console.log(err)
    }
   });

export default uploadGetRoutes;