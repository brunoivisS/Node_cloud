const api = process.env.API_KEY_GET;
const uploadGet = '../../uploads/';

class File{
    returnFile = function(req:any,res:any){
        const path = require("path");
        const autho = req.headers.authorization;
        if(autho!= api){
            return res.status(403).send("<h1>you aren't permission to acess this page!</h1>") 
        } else{
            const value = req.params;
            const file:string = path.join(__dirname, uploadGet+value.value);
            res.sendFile(file, function (err:any){
                if(err) {
                    return res.status(404).send("<h1>page not found!</h1>") 
                } else {
                return file;
                
                }
            });
        }
    }
}

export default File;