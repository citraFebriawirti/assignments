function buyThemAll(books, budget) {
    let splitBooks = books.split(" ,")
    let hasil = []
    let judul_buku = []
    let Jumlah_buku = 0
    let total_belanja = 0
  
  
    for (let i = 0; i < splitBooks.length; i++) {
      nama_harga = splitBooks[i].split(":")
      hasil.push(nama_harga)
        
    }
    for (let j = 0; j < hasil.length; j++) {
      if (budget - total_belanja < parseInt(hasil[j][1])) continue
      else {
        Jumlah_buku ++
        judul_buku.push(hasil[j][0])
        total_belanja = total_belanja + parseInt(hasil[j][1])
       
      }
    }
    return {
    Jumlah_buku, judul_buku, total_belanja
  }
  }
  
  
  console.log(
    buyThemAll(
      "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
      200000
    )
  ); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.
  
  module.exports = buyThemAll;
  