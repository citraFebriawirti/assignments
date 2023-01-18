// TODO: answer here
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
function Detail() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch data dari API
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}/`)
      // ubah response menjadi JSON
      .then((response) => response.json())
      // simpan data ke dalam state
      .then((json) => {
        // set data
        setData(json);
        // set loading menjadi false
        setLoading(false);
      });
    // handle error
  }, [id]);

  if (loading) return "Loading...";

  return (
    <>
      {data.data.map((item, index) => {
        return (
          <div>
            <Box key={index} as="card">
              <Image src={item.card_images[0].image_url} />
              <Heading as="h2">{item.name}</Heading>
              <Text>Level: {item.level}</Text>
              <Text fontWeight="bold">{item.attribute}</Text>
              <Text fontWeight="bold">
                ATK/{item.atk} DEF/{item.def}
              </Text>
              <Text>{`[ ${item.type} / ${item.race} ]`}</Text>
              <Text>{item.desc}</Text>
            </Box>
            {item.card_sets.map((akses, index) => {
              return (
                <Box
                  key={index}
                  as="card"
                  marginY="5px"
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="hidden"
                  overflow="hidden"
                >
                  <Text>Name: {akses.set_name}</Text>
                  <Text>Code: {akses.set_code}</Text>
                  <Text>Rarity: {akses.set_rarity}</Text>
                  <Text>Price: {akses.set_price}</Text>
                </Box>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default Detail;
