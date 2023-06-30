import express from 'express';
import multer from 'multer';
import {storage} from './config/multer.config';
import { returnNomesFiles } from './services/NomeFiles/Nomesfiles';
import { returnTokenFile } from './services/TokenFile/TokenFile';
require('dotenv').config({path: './.env'});
const bcrypt = require('bcrypt');

const app = express();
const upload = multer({ storage: storage});
const type = upload.single("file");
const api = process.env.API_KEY_DEV;

// const api = process.env.API_KEY_DEV;
//api do frontend vai ter acesso somente com token 
//atenção !! valida se o axios tem a opção de define o authorization da header 
// necessario fazer isso por conta de exibir o token da api no caminho
//dificitando o acesso a api de forma inadequada(para usuario mal intesonado)
app.get("/uploads/:value", ( req, res) => {
    const path = require("path");
    const autho = req.headers.authorization;
    
    if(autho!= api){
        return res.status(404).json({
            erro: true,
            mensagem: "you haven't permission to acess this page!"
        }) 
    } else{
        const value = req.params;
        const file = path.join(__dirname, 'uploads/'+value.value);
         res.sendFile(file, function (err){
             if(err) {
                 console.log("Error");
                 console.log(err);
             } else {
           
             
             }
         });
    }
});


//here is the other nwe token to upload new files
// create a new token for this routes in the future
app.post("/upload",type,(req, res) => { 
    const authup = req.headers.authorization;
    const tokenUplo = process.env.API_KEY_DEV;
    const vai = req.file?.path;

    try {
        if(authup === tokenUplo){
            if(req.file === null){
                return res.status(409).json({
                    erro: true,
                    mensagem: "Vai conseguir um emprego para de fazer projetos com framework."
                })
            } else {
                console.log(vai);
                return res.json(req.file);   
            }   
        } else {
            return res.status(403).json({
                erro: true,
                mensagem: "you aren't permission to acess this page!"
            }) 
        }
    } catch (err){
        console.log(err);
    }
});

app.use(( req, res) => {
    return res.status(404).send("Page not found.");
  });



app.listen(3000);