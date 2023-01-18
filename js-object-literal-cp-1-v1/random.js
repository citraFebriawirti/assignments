let arr = [5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]
let hasil = {}


for (i = 0; i < arr.length; i++){
    if (hasil[arr[i]] in arr) {
        hasil[arr[i]] += 1
    } else {
        hasil[arr[i]] = 1
    }
}

console.log(hasil)