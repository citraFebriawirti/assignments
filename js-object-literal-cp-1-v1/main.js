function counterApp(arr) {
  let hasil = {}

    if (arr == '') {
        return "Data not found" 
    } else if (arr === undefined) {
        return "Invalid input"
    } else {
        for (i = 0; i <  arr.length; i++){
            if (hasil[arr[i]] in arr) {
                hasil[arr[i]] += 1
            } else {
                hasil[arr[i]] = 1
            }
          
        }
        
    }
    return hasil
}

console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp
