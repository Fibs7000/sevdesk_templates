const fs = require("fs")

const data = require("./data.json")


let lines = fs.readFileSync("./SEVDOC_TEMPLATE_STANDARD.html").toString();

const reg = /\{\{\{?([^\^/#]+?)\}\}\}?/g
const delReg = /\{\{\{?([#/\^].+?)\}\}\}?/g
// let res = reg.(lines)
// let res = lines.match(reg);

lines = lines.replace(delReg, "");


function getDataFromPath(path){
    let val = data;
    for (const key of path) {
        val = val[key]
    }
    return val;
}

lines = lines.replace(reg, (first, val) => {
    let path = val.split('.').map(v=>v.trim());
    return getDataFromPath(path)
})

fs.writeFileSync('./index.html', lines);
