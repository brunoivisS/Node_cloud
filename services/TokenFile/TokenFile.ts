const crypto = require('crypto');

 let password:any;
    export function returnTokenFile():void {
        try {
            const tokenLength = 32;
            const randomBytes = crypto.randomBytes(tokenLength);
            const token = randomBytes.toString('hex');
            return token;
        }catch (err){
            console.log(err)
        }
    }









