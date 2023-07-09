const api = process.env.API_KEY_DEV;
const uploadGet = '../../uploads/';

class File{
    returnFile = function(req:any,res:any){
        const path = require("path");
        const autho = req.headers.authorization;
        if(autho!= api){
            return res.status(404).json({
                erro: true,
                mensagem: "you haven't permission to acess this page!"
            }) 
        } else{
            const value = req.params;
            const file:string = path.join(__dirname, uploadGet+value.value);
            res.sendFile(file, function (err:any){
                if(err) {
                    console.log("Error");
                    console.log(err);
                } else {
                return file;
                
                }
            });
        }
    }
}

export default File;