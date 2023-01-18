function mostRecommended(games) {
    let result = {}
    const panjang = games.length
  
    if(panjang <= 2) {
        return "Data cannot be compared"
    } else {
        games.forEach((element) => {
            if (!result[element.genre],element.rating) {
                result[element.genre] = {
                  title: [],
                  genre: [],
                  developer: [],
                  rating:[],
                }
            }
          result[element.genre].title.push(element.title) 
          result[element.genre].genre.push(element.genre) 
          result[element.genre].developer.push(element.developer) 
          result[element.genre].rating.push(element.rating) 
            
        });
    }
    return result
  }
  
  const allGames = [
    {
      title: "The Last of Us Part I",
      genre: "actionAdventure",
      developer: "Naughty Dog",
      rating: 9.6,
    },
    {
      title: "WWE 2K22",
      genre: "fighting",
      developer: "Visual Concepts",
      rating: 7.5,
    },
    {
      title: "Tom Clancy's Ghost Recon: Wildlands",
      genre: "firstPersonShooter",
      developer: "Ubisoft Belgrade",
      rating: 7.9,
    },
    { title: "The Sims 4", genre: "simulation", developer: "Maxis", rating: 9.2 },
    {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    },
    {
      title: "The Witcher 3: Wild Hunt",
      genre: "actionAdventure",
      developer: "CD Projekt Red",
      rating: 10,
    },
    {
      title: "Cities: Skylines",
      genre: "simulation",
      developer: "Colossal Order",
      rating: 9.4,
    },
    {
      title: "Far Cry 5",
      genre: "firstPersonShooter",
      developer: "Ubisoft Montreal",
      rating: 8.9,
    },
    {
      title: "Project CARS 3",
      genre: "racing",
      developer: "Slightly Mad Studios",
      rating: 6.8,
    },
    {
      title: "Hot Wheels Unleashed",
      genre: "racing",
      developer: "Milestone",
      rating: 9.2,
    },
  ];
  
  console.log(mostRecommended(allGames));
  console.log(
    mostRecommended([
      {
        title: "Tekken 7",
        genre: "fighting",
        developer: "BANDAI NAMCO Studios",
        rating: 9.5,
      },
    ])
  );
  
  module.exports = mostRecommended;
  