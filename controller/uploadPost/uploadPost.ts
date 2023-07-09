const tokenUplo = process.env.API_KEY_DEV;
class Upload{
    uploadfile = function(req:any,res:any){
        const authup = req.headers.authorization;
        const pathFile = req.file?.path;
        console.log(tokenUplo +" and "+authup)
        try {
            if(authup === tokenUplo){
                if(!req.file){
                    return res.status(409).json({
                        erro: true,
                        mensagem: "oh! I think you forgot select the file."
                    })
                } else {
                    console.log(pathFile);
                    return res.json(req.file);   
                }   
            } else {
                return res.status(403).json({
                    erro: true,
                    mensagem: "you aren't permission to acess this page!"
                }) 
            }
        } catch (err){
            console.log(err)
        }
    }
}
export default Upload;