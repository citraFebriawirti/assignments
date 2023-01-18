function travelDiscount(id, amount) {
    let Id_Name1 = id.slice(0, 3)
    let Id_Name2 = id.slice(0, 4)
    let harga_total = 0

    if(Id_Name1 === 'STD' || Id_Name2 === 'CORP' || Id_Name1 === 'CORP' || Id_Name2 === 'STD') {
        let status = ''

        if (Id_Name1 === 'STD' || Id_Name2 === 'STD') {
            status = 'STUDENT'
            harga_total = (amount * 20000)
            if (amount > 20) {
                harga_total = harga_total - (harga_total * 0.2)}
        } else if (Id_Name1 === 'CORP' || Id_Name2 === 'CORP') {
            status = 'CORPORATE'
            harga_total = (amount * 50000)
            if (amount > 30) {
                harga_total = harga_total - (harga_total * 0.25)}
        }
            return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${harga_total}.`
    } else {
        return `Maaf, voucher yang anda miliki tidak valid!`
    }
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
