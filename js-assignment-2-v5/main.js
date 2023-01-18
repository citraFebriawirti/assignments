function convertItems(items) {
    // menghilangkan karakter | dengan memasukkannya ke array
    //  dan yang tidak memiliki karakter tetap jadikan ke array

    return items.map(isi => isi.split("|"))
   
}
// console.log(convertItems([  "Spakbor Gordon|150000|variation",
// "Head Lamp",
// "USD KX150|8500000|bodyParts",
// "Handle Expedition|275000|variation",
// "Karet Body",
// "Body set KTM|1899950|bodyParts",
// "Jok Gordon|250000|variation",
// "Behel Bodyset Gordon",
// "CDI BRT KLX|625000|electrics",
// "Cover jok KLX|185000|variation",]))

function filterItems(items) {
    // setiap items yang tidak memiliki harga dan kategori akan dihilangkan
    // ubah harga dari string ke int
 
    let filterr = items.filter(isi => isi.length ==  3 )
    for (let i = 0; i < items.length; i++) {
        items[i][1] = parseInt(items[i][1])
 }
    return filterr

}
// console.log(filterItems([["Spakbor Gordon", "150000", "variation"],
// ["Head Lamp"],
// ["USD KX150", "8500000", "bodyParts"],
// ["Handle Expedition", "275000", "variation"],
// ["Karet Body"],
// ["Body set KTM", "1899950", "bodyParts"],
// ["Jok Gordon", "250000", "variation"],
// ["Behel Bodyset Gordon"],
// ["CDI BRT KLX", "625000", "electricity"],
// ["Cover jok KLX", "185000", "variation"],]))

function generateSpareParts(items) {
    // mengubah ke object dengan key name dari index pertama, price dari index kedua dan category dari index ketiga

    return items.map(isi => (
        {
            name: isi[0],
            price: isi[1],
            category: isi[2]
        }
    ))
}
// console.log(generateSpareParts([["Spakbor Gordon", 150000, "variation"],
// ["USD KX150", 8500000, "bodyParts"],
// ["Handle Expedition", 275000, "variation"],
// ["Body set KTM", 1899950, "bodyParts"],
// ["Jok Gordon", 250000, "variation"],
// ["CDI BRT KLX", 625000, "electricity"],
// ["Cover jok KLX", 185000, "variation"],]))

function itemsStatistics(items) {
   //   menghitung masing-masing items
    //  variation, bodypart,electricity

    let hasil = {}
    for (let j = 0; j < items.length; j++) {
        if (hasil[items[j][2]] in items) {
            // console.log(items[j])
            hasil[items[j][2]] += 1 
        }else {
            hasil[items[j][2]] = 1
        }
        
    }
    return hasil


}
// console.log(itemsStatistics([ ["Spakbor Gordon", 150000, "variation"],
// ["USD KX150", 8500000, "bodyParts"],
// ["Handle Expedition", 275000, "variation"],
// ["Body set KTM", 1899950, "bodyParts"],
// ["Jok Gordon", 250000, "variation"],
// ["CDI BRT KLX", 625000, "electricity"],
// ["Cover jok KLX", 185000, "variation"],
// ]))

function generateItemsData(items) {
    // buat key spare_parts dengan format nama,price dan category
    // statistics berisi object jumlah dengan katergory variation, bodyparts,electricy
    
    let result = {
        spare_parts: generateSpareParts(filterItems(convertItems(items))),
        statistics : itemsStatistics(filterItems(convertItems(items)))

    }
    return result
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}