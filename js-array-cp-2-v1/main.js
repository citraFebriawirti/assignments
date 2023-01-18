function vocalCounter(array) {
    let jumlah = 0
    let huruf_vokal = ['A', 'a', 'I', 'i', 'U', 'u', 'E', 'e', 'O', 'o']
    let vocal_ditemukan = ''
   
    array.forEach(element => {
        for (let i = 0; i < huruf_vokal.length; i++) {
            if (element == huruf_vokal[i]) { 
                jumlah++
                vocal_ditemukan += huruf_vokal[i]
               
            }
        } 
    });
    if (jumlah == 0) {
        return `Tidak ada huruf vokal yang ditemukan`   
    } else {
        return `Jumlah vokal yang ditemukan sebanyak ${jumlah} berupa ${vocal_ditemukan}`   
   }
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
