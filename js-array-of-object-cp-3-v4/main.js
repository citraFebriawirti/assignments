function mostRecommended(games) {
  let result = {}
  const panjang = games.length

  if(panjang <= 2) {
      return "Data cannot be compared"
  } else {
    const result = games.reduce((total, now) => {
      total[now.genre] = total[now.genre] || [];
      total[now.genre].push(now);
      return total;
    }, {});
    const keyValues = Object.values(result);
    let arrResult = [];

    for (let i = 0; i < keyValues.length; i++) {
      let arrKey = keyValues[i];
      let arrValue = Object.values(arrKey);
      if (arrValue.length == 1) {
        arrResult.push(arrValue[0]);
      }
      for (let j = 0; j < arrValue.length; j++) {
        if (arrValue[0]["rating"] === arrValue[j]["rating"]) {
          arrResult.push(arrValue[0]);
          arrResult.push(arrValue[j]);
        } else if (arrValue[0]["rating"] > arrValue[j]["rating"]) {
          arrResult.push(arrValue[0]);
        } else if (arrValue[0]["rating"] < arrValue[j]["rating"]) {
          arrResult.push(arrValue[j]);
        }
      }
    }

    const lastResult = arrResult.reduce((total, now) => {
      total[now.genre] = total[now.genre] || {};
      total[now.genre] = now;

      return total;
    }, {});
  
    return lastResult;
  }
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
