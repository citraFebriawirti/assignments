
function mapUsers(users) {
  return {
    // Mengambil data users
    data: users,
    // Menjumlahkan dari data users
    count :  Object.keys(users).length
  }
}

// const users = 
// [
//   {
//     "id": 1,
//     "username": "isrotrip",
//     "password": "PhT1Oky01",
//     "gender": "male"
//   },
//   {
//     "id": 2,
//     "username": "dmtrxw",
//     "password": "oYt2Thj9w",
//     "gender": "male"
//   },
//   {
//     "id": 3,
//     "username": "afifahrahmak",
//     "password": "YhI6ErG71",
//     "gender": "female"
//   },
//   {
//     "id": 4,
//     "username": "ijtj",
//     "password": "cok1BgS77",
//     "gender": "male"
//   },
//   {
//     "id": 5,
//     "username": "arnoltherigan",
//     "password": "Ko4Rn0lD",
//     "gender": "male"
//   },
//   ]

//   console.log(mapUsers(users))



function mapArticles(articles) {
  return {
     // Mengambil data articles
    data: articles,
     // Menjumlahkan dari data articles
    count : articles.length
  }
}


export default mapUsers;// default export
export {mapArticles}   ;//named export

