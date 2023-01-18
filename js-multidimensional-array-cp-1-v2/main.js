function travelSeat(passengers, seatColumn) {
    let totalpenumpang = [];
    let urutan = passengers.sort();
    
    if (seatColumn == 0 || seatColumn < 1) {
      return "Invalid number";
    } else if (passengers.length ==  0) {
      return "Oops! tickets not sold!";
    } else {
        for (let i = 0; i < urutan.length; i += seatColumn){
            let temp = urutan.slice(i, i + seatColumn);
            totalpenumpang.push(temp);
            while (temp.length % seatColumn != 0) {
                const set = "Seat available"
                temp.push(set)
            }
        }
        return totalpenumpang
    }
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat
