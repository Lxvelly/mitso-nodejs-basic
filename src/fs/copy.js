import { existsSync, cpSync } from 'fs';

const copy = async () => {
    if(!existsSync('/home/tema/code/mitso-nodejs-basic/src/fs/files') || existsSync('/home/tema/code/mitso-nodejs-basic/src/fs/files-copy')) {
        console.log("FS eror4ik")
    } else {
        cpSync('/home/tema/code/mitso-nodejs-basic/src/fs/files', '/home/tema/code/mitso-nodejs-basic/src/fs/files-copy', {
            recursive: true,
        });
        console.log('done')
    }
};

await copy();
