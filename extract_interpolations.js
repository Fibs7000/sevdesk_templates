const fs = require("fs")

const lines = fs.readFileSync("./SEVDOC_TEMPLATE_STANDARD.html").toString();

const reg = /\{\{\{?([^\^/#]+?)\}\}\}?/g
// let res = reg.(lines)
// let res = lines.match(reg);

let resultObj = {};

function getObjectAtKeyOrCreateOne(currObj, key){
    if(currObj[key]===undefined){
        currObj[key] = {};
    }
    return currObj[key]
}

function addElementAtPath(obj, path, value){
    let curr = obj;
    
    for (let i = 0; i< path.length-1; i++) {
        curr = getObjectAtKeyOrCreateOne(curr, path[i])
    }

    curr[path[path.length-1]] = value;
}

while ((match = reg.exec(lines)) !== null) {
    
    let path = match[1].trim().split('.').map(l=>l.trim());
    addElementAtPath(resultObj, path, "");
}

fs.writeFileSync("data.json", JSON.stringify(resultObj));