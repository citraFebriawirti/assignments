function buyThemAll(books, budget) {
    let hasil = [];
    let buku_terbeli = [];
    let Jumlah_buku = 0;
    let total_belanja = 0;
    let splitBooks = books.split(",");

    for (let i = 0; i < splitBooks.length; i++) {
        hasil[i] = splitBooks[i].split(":");
    }
  
    for (let i = 0; i < hasil.length; i++) {
      if (total_belanja + parseInt(hasil[i][1]) <= budget) {
          total_belanja += +(hasil[i][1]);
          buku_terbeli[Jumlah_buku] - hasil[i][0];
          Jumlah_buku++;
      }
     
    }
    if (buku_terbeli.length == 0) {
        return "Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah " + budget + ".";
      
  } else {
        return "Afista membeli " + Jumlah_buku + " buku yaitu " + buku_terbeli.join(", ") + ". Total belanja " + total_belanja + ", sisa uang Afista adalah " + (budget - total_belanja) + ".";
  }
  }
  
  
  console.log(
    buyThemAll(
      "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
      100000
    )
  );// Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.
  
  module.exports = buyThemAll;
  