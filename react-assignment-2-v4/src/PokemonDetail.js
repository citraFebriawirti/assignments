import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, VStack, Heading, Box } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          {/* TODO: display pokemon name here */}
          <Heading as="h3" size="md">
            {pokemon.name}
          </Heading>

          {/* TODO: display pokemon type here */}
          {pokemon.types.map((pokemon) => (
            <Badge key={pokemon.type.name}>{pokemon.type.name}</Badge>
          ))}
          <HStack>
            <Image src={pokemon.sprites.front_default} />
            <Image src={pokemon.sprites.back_default} />
            <Image src={pokemon.sprites.front_shiny} />
            <Image src={pokemon.sprites.back_shiny} />
          </HStack>
          {/* TODO: render pokemon height, weight, base_experience, abilities, and stats here */}
          <Table>
            <Tbody>
              <Tr>
                <Td>Height</Td>
                <Td>{pokemon.height}</Td>
              </Tr>
              <Tr>
                <Td>Weight</Td>
                <Td>{pokemon.weight}</Td>
              </Tr>
              <Tr>
                <Td>Base Experience</Td>
                <Td>{pokemon.base_experience}</Td>
              </Tr>
              <Tr>
                <Td>Abilities</Td>
                <Td>
                  {pokemon.abilities.map((pokemon) => (
                    <Tr>
                      <Badge key={pokemon.ability.name}>
                        {pokemon.ability.name}
                      </Badge>
                    </Tr>
                  ))}
                </Td>
                {/* {pokemon.types.map((pokemon) => (
                  <Badge key={pokemon.type.name}>{pokemon.type.name}</Badge>
                ))} */}
              </Tr>
              <Tr>
                <Td>Stats</Td>
                <Td>
                  {pokemon.stats.map((pokemon) => (
                    <Tr>
                      <Badge key={pokemon.stat.name}>{pokemon.stat.name}</Badge>
                    </Tr>
                  ))}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  //TODO: read pokemonId from parameter
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    // menampilkan data
    fetchPokemon(pokemonId);
  }, [pokemonId]);

  return <Detail pokemon={pokemon} />;
};

export default Page;
