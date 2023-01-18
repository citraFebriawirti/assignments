// TODO: answer here
import Card from "./Cards";
import { useState, useEffect } from "react";
import { Select, SimpleGrid, Container } from "@chakra-ui/react";

function Home() {
  // TODO: answer here
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    // fetch data dari API
    await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4`
    )
      // ubah response menjadi JSON
      .then((response) => response.json())
      // simpan data ke dalam state
      .then((json) => {
        // set data
        setData(json.data);
        // console.log(json);
        // set loading menjadi false
        setLoading(false);
      });
    // handle error
  }
  if (loading) return <h1>Loading...</h1>;

  function SortData(type) {
    // mensorting data dengan

    const sorting = [...data].sort((x, y) => {
      // if (x[type] < y[type]) {
      //   return -1;
      // } else if (x[type] > y[type]) {
      //   return 1;
      // } else {
      //   return 0;
      // }
      if (type === "name") {
        return x.name > y.name ? 1 : x.name === y.name ? 1 : -1;
      } else if (type === "attack") {
        return x.atk - y.atk;
      } else if (type === "defence") {
        return x.def - y.def;
      }
    });
    setData(sorting);
  }

  return (
    <>
      <Select
        name="sort"
        placeholder="Sort by"
        onChange={(e) => {
          SortData(e.target.value);
        }}
      >
        <option value="name">Name</option>
        <option value="attack">Attack</option>
        <option value="defence">Defence</option>
      </Select>
      <SimpleGrid columns={4} spacing={2} justifyItems>
        {/* <SortData /> */}
        <Card card={data} />
      </SimpleGrid>
    </>
  );
}

export default Home;
