function countryMedals(players, countries) {
    // jika negara tidak ditemukan maka akan muncul "Countries not provided"
    if (countries == undefined) {
        return "Countries not provided"
    } else {
        // map disini memanggil fungsi sekali untuk setiap elemen dalam array.
        return countries.map((country) => {
            // memanggil key name, athlete, totalMedals
            return {
                name: country,
                athlete: players.filter(e => e.country == country).map(e => e.name),
                totalMedals:  players.filter(e => e.country == country).reduce((previousValue, el) => previousValue + el.medals, 0)
            }
        });
    }
}

let playerData = [
    {
        name: "Lionel Messi",
        medals: 5,
        country: "Argentina"
    },
    {
        name: "Iker Casillas",
        medals: 7,
        country: "Spain"
    },
    {
        name: "Ahmad Waluyo",
        medals: 5,
        country: "Indonesia"
    },
    {
        name: "Alvin Arkansas",
        medals: 8,
        country: "Indonesia"
    },
    {
        name: "Gabriel Batistuta",
        medals: 1,
        country: "Argentina"
    },
    {
        name: "Xavi Hernandes",
        medals: 9,
        country: "Spain"
    },
    {
        name: "Carles Puyol",
        medals: 5,
        country: "Spain"
    },
    {
        name: "Jatmika Teja",
        medals: 6,
        country: "Indonesia"
    },
    {
        name: "Sergio Aguero",
        medals: 3,
        country: "Argentina"
    },
]

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals