function splitToArr(str) {
    let Nama = ''
    
        if (str == '' ) {
            return "Data not available" 
        } else if (str == null) {
            return "Invalid input"
        } else {
            Nama = str.split(/[-;]+/)  
            for (let i = 0; i < Nama.length; i++) {
                let kapital = Nama[i].charAt(0).toUpperCase();
                let kecil = Nama[i].slice(1);    
                Nama[i] = kapital+kecil
            }
            return Nama
    }  
    }

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())

module.exports = splitToArr