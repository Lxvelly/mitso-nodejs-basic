import {existsSync, rename} from 'fs'

const rename = async () => {
    if(!existsSync('/home/tema/code/mitso-nodejs-basic/src/fs/files/wrongFilename.txt') || existsSync('/home/tema/code/mitso-nodejs-basic/src/fs/files/properFileName.md')) {
        console.log('FS operation failed =(')
    } else {
        rename('/home/tema/code/mitso-nodejs-basic/src/fs/files/wrongFilename.txt', '/home/tema/code/mitso-nodejs-basic/src/fs/files/properFileName.md')
        console.log("done")
    }
};

await rename();