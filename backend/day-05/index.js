const fs = require('fs')
const args = process.argv

args.shift()
args.shift()

let option = null;

let data = null;
let func = null;
let type = null;
let name = null;

while(option = args.shift()){
    let value = args.shift()
    switch (option){
        case "--action":
            func = value
            break
        case "--data":
            data = value
            break
        case "--type":
            type = value
            break
        case "--name":
            name = value
    }
}

switch (func){
    case "create":
        create(type, )
}
