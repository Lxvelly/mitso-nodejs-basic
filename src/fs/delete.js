import {existsSync, unlink} from "fs"

const remove = async () => {
        unlink('/home/tema/code/mitso-nodejs-basic/src/fs/files/fileToRemove.txt', (err) => {
            if(err) {
                console.log("FS operation error")
            } else {
                console.log("done")
            }
        })
    
};

await remove();