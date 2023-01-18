function countryMedals(players, countries) {
  if (countries != undefined) {
      return countries.map((country) => {
          return {
              name: country,
              athlete: players.filter(e => e.country == country).map(e => e.name),
              totalMedals:  players.filter(e => e.country == country).reduce((previousValue, el) => previousValue + el.medals, 0)
          }
      });
  } else {
      return "Countries not provided";
  }
}