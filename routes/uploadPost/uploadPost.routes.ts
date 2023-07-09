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
                if(res.status(500)){
                    console.log("fsjkhfuisf")
                } 
        }
});
export default uploadPostRoutes;