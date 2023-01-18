function discountChecker(costumers, date) {

    let myarray = []
    let harga_barang = 0
    let tanggal = date.split("-")

    
    for (let i = 0; i < costumers.length; i++) {
        let harga_total = costumers[i][0].split("$ ")
        let new_tanggal = tanggal[0]

        if(costumers[i][1] == 'member') {
            myarray.push(costumers[i])
        } else {
            if (parseInt(new_tanggal) % 2 == 0 && parseInt(harga_total[1]) % 2 == 0) {
                myarray.push(costumers[i])
            }else if(parseInt(new_tanggal) % 2 != 0 && parseInt(harga_total[1]) % 2 != 0){
                myarray.push(costumers[i])
            }
        }
    }
    return myarray 
    }

    
    


let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers,
    "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
