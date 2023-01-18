// TODO: answer here
import { Box, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
  console.log(card);
  return (
    <>
      {card.map((el, index) => (
        <Link to={`/card/${el.id}`} key={index}>
          <Box className="yugioh-card" width="200px" pt="20px">
            <Image src={el.card_images[0].image_url} />
            <Heading as="h2">{el.name}</Heading>
          </Box>
        </Link>
      ))}

      {/* <SimpleGrid columns={4} spacing={10}>
        {card.map((el, index) => (
          <div key={index}>
            <h1>{el.name}</h1>
            <Image src={el.card_images[0].image_url} />
          </div>
        ))}
      </SimpleGrid> */}
    </>
  );
}

export default Card;
