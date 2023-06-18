import express from 'express';
import multer from 'multer';
import {storage} from './config/multer.config';
require('dotenv').config({path: './.env'});


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
            mensagem: "you aren't permission to acess this page!"
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


//aqui vai ter outro token 
app.post("/upload",type,(req, res) => { 
if(req.file == null){
    return res.status(404).json({
        erro: true,
        mensagem: "Vai conseguir um emprego para de fazer projetos com framework"
    })
} else {
   const vai = req.file.path;
    console.log(vai);
    return res.json(req.file);   
}   
});




app.use(( req, res) => {
    return res.status(404).send("Page not found.");
  });



app.listen(3000);
