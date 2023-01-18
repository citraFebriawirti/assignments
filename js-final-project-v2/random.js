function PerGenres(genres, movies){
  const result = [];
  for (let index = 0; index < movies.length; index++) {
    const checker = genres.includes(movies[index]['genre']);
    if (checker == true) {
      result.push(movies[index])
    } 
  }
  return result
}

// PerTicket 1 Movies
function PerSingleTicket(user, movie){
  const ticket = user['ticket'];
  const availability = movie['capacity'] - movie['soldTicket'];
  if (availability < ticket){
    return false
  }
  return true
}

function findRecommedantion(user){
  let result = [];
  let genres = user['favoriteGenre'];
  let movie_list = PerGenres(genres, movies);
  let ticket = user['ticket'];
  for (let index = 0; index < movie_list.length; index++) {
    let availability = movie_list[index]['capacity'] - movie_list[index]['soldTicket'];
    if(availability >= ticket){
      result.push(movie_list[index])
    }
  }
  return result;
}

function Price(genre, ticket){
  if (genre == 'Action') {
    price = 100000;
  } else if (genre == 'Musical'){
    price = 80000;
  } else if(genre == 'Romance'){
    price = 40000;
  } else if(genre == 'Horror'){
    price = 75000;
  } else {
    price = NaN;
  }
  return price * ticket;
}

function generateRecommendation(user){
  let hasil = findRecommedantion(user);
  for (let index = 0; index < hasil.length; index++) {
    delete hasil[index]['soldTicket'];
    delete hasil[index]['capacity'];
    g = hasil[index]['genre'];
    t = user['ticket'];
    hasil[index]['totalPrice'] = Price(g, t)
  }
  return hasil
}

let movies = [
  {id: 1, name: "Avengers end game", genre: "Action", soldTicket: 149, capacity: 150},
  {id: 2, name: "La la Land", genre: "Romance", soldTicket: 20, capacity: 75},
  {id: 3, name: "Beauty and the Beast", genre: "Romance", soldTicket: 50, capacity: 50},
  {id: 4, name: "Superman vs Batman", genre: "Action", soldTicket: 150, capacity: 250},
  {id: 5, name: "Transformer", genre: "Action", soldTicket: 90, capacity: 90},
  {id: 6, name: "5 feet apart", genre: "Romance", soldTicket: 25, capacity: 45},
  {id: 7, name: "Hamilton", genre: "Musical", soldTicket: 295, capacity: 300},
  {id: 8, name: "Dear Evan Hansen", genre: "Musical", soldTicket: 150, capacity: 200},
  {id: 9, name: "Conjuring", genre: "Horror", soldTicket: 30, capacity: 100},
  {id: 10, name: "Annabelle", genre: "Horror", soldTicket: 10, capacity: 30},
  {id: 11, name: "Fast and Furios", genre: "Action", soldTicket: 25, capacity: 40},
  {id: 12, name: "Romeo and Julet", genre: "Romance", soldTicket: 15, capacity: 15},
  {id: 13, name: "Wicked", genre: "Musical", soldTicket: 75, capacity: 75},
];

let user = {
  name: "Aditira",
  ticket: 10,
  favoriteGenre: ["Action", "Musical"],
};

console.log(generateRecommendation(user))