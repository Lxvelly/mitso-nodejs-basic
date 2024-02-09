import {readdirSync} from "fs"

const list = async () => {
 console.log(readdirSync('/home/tema/code/mitso-nodejs-basic/src/fs/files', (err) => {
    if(err) {
        console.log('FS operation failed')
    } else {
        console.log('done')
    }
  }))
};

await list();