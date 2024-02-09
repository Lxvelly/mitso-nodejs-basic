import {readFile} from "fs"

const read = async () => {

    readFile('/home/tema/code/mitso-nodejs-basic/src/fs/files/fileToRead.txt', (err, data) => {
        if(err) {
            console.log('FS operation failed')
        } else {
            console.log(Buffer.from(data,'utf-8').toString())
        }
    })
};

await read();