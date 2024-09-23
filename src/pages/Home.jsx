import { Component, useEffect, useState } from 'react'
import { Container, Heading, Grid, Image } from "@chakra-ui/react";
import { fetchTrending } from '../services/api';
import { imagePath } from '../services/api';

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchTrending('day')
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }, []);

  return (
    <Container maxW={"container.xl"}>
      <Heading as="h2" fontSize={"md"} textTransform={"uppercase"}>
        Trending
      </Heading>

      <Grid templateColumns={'repeat(5, 1fr)'}>
        {data && data?.map((item) => (
          <Image key={item?.id} src={`${imagePath}/${item?.poster_path}`}/>
        ))}
      </Grid>
    </Container>
  )
}

export default Home