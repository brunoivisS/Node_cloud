const tokenUplo = process.env.API_KEY_UPLOAD;
class Upload{
    uploadfile = function(req:any,res:any){
        const authup = req.headers.authorization;
        const pathFile = req.file?.path;
        try {
            if(authup === tokenUplo){
                if(!req.file){
                    return res.status(409).send("<h1>oh! I think you forgot select the file.</h1>")
                } else {
                    return res.json(req.file);   
                }   
            } else {
                return res.status(403).send("<h1>you aren't permission to acess this page!</h1>") 
            }
        } catch (err){
            return res.status(404).send("<h1>page not found!</h1>") 
        }
    }
}
export default Upload;