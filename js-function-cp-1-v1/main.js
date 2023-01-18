function checkDatatype(param) {
    if (Array.isArray(param)) {
        return "array"  
    } else if(param == undefined) {
        return "null"
    }else {
       return typeof(param)
    }
}
 
console.log(checkDatatype("Ruang Guru"))
console.log(checkDatatype(123))
console.log(checkDatatype(true))
console.log(checkDatatype([1,2,3]))


exports.checkDatatype= checkDatatype;