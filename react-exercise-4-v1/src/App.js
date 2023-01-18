// import hooks
import { useState, useEffect } from "react";

function App() {
  // menyimpan data all
  const all = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
  // menyimpan data basic
  const basic = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49?fields=title,description"
  // menyimpan data basic with creator 
  const basicWithCreator = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49?fields=title,description,director,producer"
  // state untuk menyimpan url
  const [link, setLink] = useState(all)
  // state untuk menyimpan data
  const [data, setData] = useState(null);
  // state untuk menyimpan status loading
  const [loading, setLoading] = useState(null);
  

  // useEffect akan dijalankan ketika komponen pertama kali di-mount
  useEffect(() => {
    // mengset data dengan array kosong dulu
    setData([])
    // jika set loading nya berisi true
    setLoading(true)
    const getMovie = async () => {
      try {
        const response = await fetch(link)
        const responseJson = await response.json()
        setData(responseJson)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    getMovie()
  }, [link]);

  // jika data sudah ada, tampilkan data
  return (
    <>
          <select name="" id="" onChange={(e) => setLink(e.target.value)}>
            <option value={all}>All</option>
            <option value={basic}>Basic</option>
            <option value={basicWithCreator}>Basic with Creator</option>
          </select>
       

      {loading && <h2>Loading...</h2>}
      {data && link === all ? (
        <div style={{ display: "flex" }}>
          <div>
            <img src={data.image} width="300" />
          </div>
          <div>
            <h2>{data.title}</h2>
            <h2>{data.original_title}</h2>
            <p>{data.release_date}</p>
            <p>Rating: {data.rt_score}</p>
            <p>Director: {data.director}</p>
            <p>Producer: {data.producer}</p>
            <p>{data.description}</p>
          </div>
        </div>
      ) : link === basic ? (
          <div style={{ display: "flex" }}>
            <div>
            <h2>{data.title}</h2>
              <p>{data.description}</p>
            
            </div>
          </div>
        ) : link === basicWithCreator ? (
          <div style={{ display: "flex" }}>
            <div>
            <h2>{data.title}</h2>
            <p>Director: {data.director}</p>
            <p>Producer: {data.producer}</p>
            <p>{data.description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default App;
