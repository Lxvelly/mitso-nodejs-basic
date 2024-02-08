import { existsSync, appendFile } from 'fs';

const create = async () => {
    if(existsSync('/home/tema/code/mitso-nodejs-basic/src/fs/files/fresh.txt')) {
        console.log("FS eror")
    } else {
         appendFile('/home/tema/code/mitso-nodejs-basic/src/fs/files/fresh.txt', 'Im fresh and young', function (err) {
        if(err) throw err;
         console.log("Done")
    });
    }
    
   
};

await create();