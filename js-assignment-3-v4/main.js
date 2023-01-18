function rekapSalesByName(data, name) {
    let jumlah = 0
    
    // jumlah jumlah data sales per bulan
    for(idx = 0; idx < data.length; idx++){
        jumlah += data[idx].totalSales
    }
    return jumlah
}

//  data per sales berdasarkan name
function PerSales(data){
    let hasil = {Adi: 0, Budi: 0, Poltak: 0, Sri: 0, Udin: 0}
    for(idx = 0; idx < data.length; idx++){
        let sales = data[idx].salesName
        let totalSales = data[idx].totalSales
        if(sales == 'Adi'){
        hasil[sales] += totalSales
        } else if(sales == 'Budi'){
        hasil[sales] += totalSales
        } else if(sales == 'Poltak'){
        hasil[sales] += totalSales
        } else if(sales == 'Sri'){
        hasil[sales] += totalSales
        } else if(sales == 'Udin'){
        hasil[sales] += totalSales
        }
    }
    return hasil
}
// mengelompokkan type tambah dan koreksi
function Tambah(kegiatan){
    delete kegiatan['type']
    return kegiatan
}

  function salesReport(data, correction){
    // Koreksi Data
    for(i = 0; i < correction.length; i++){
      if (correction[i]['type'] == 'tambah'){
        data.push(Tambah(correction[i]))
      }
      for(j = 0; j < data.length; j++){
        if ((correction[i]['salesName'] == data[j]['salesName']) & (correction[i]['salesDate'] == data[j]['salesDate'])){
          data[j]['totalSales'] = correction[i]['totalSales'];
        }
      }
    }
      
      // mencari total jualan  menjual terbanyak
    let totalValues = Object.values(PerSales(data));
    let maxsales = Math.max(...totalValues);
  
    // nama sales yang menjual terbanyak
    let salesToWin = Object.keys(PerSales(data)).reduce((a, b) => {
      return PerSales(data)[a] > PerSales(data)[b] ? a : b;
    });
  
    let finalOutput = {
        monthlySales : rekapSalesByName(data),
        totalSalesByName: PerSales(data),
        bestSalesman: `Penjualan terbanyak dilakukan oleh ${salesToWin} dengan total penjualan dalam 1 bulan sebesar ${maxsales}`,
    }
    return finalOutput
  }


data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1
    },
    {

        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
    {
        salesName: 'Adi',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Sri',
        totalSales: 100,
        salesDate: 1
    },
];
correction = [
    {
        type: 'tambah',
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 2
    },
    {
        type: 'tambah',
        salesName: 'Adi',
        totalSales: 50,
        salesDate: 2
    },
];

console.log(salesReport(data,correction))

module.exports = {
    salesReport,
}
