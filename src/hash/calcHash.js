import {readFile} from 'fs'
import {createHash} from 'crypto'

function hash(string) {
    return createHash('sha256').update(string).digest('hex')
}

const calculateHash = async () => {
    readFile('/home/tema/code/mitso-nodejs-basic/src/hash/files/fileToCalculateHashFor.txt', (err,data) => {
    if(err) {
        console.log('FS operation failed')
    } else {
        console.log(hash(data))
    }
   })
};

await calculateHash();