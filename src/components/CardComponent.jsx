import React from 'react'
import { Box, Image, Link } from '@chakra-ui/react'
import { imagePath } from '../services/api'

const CardComponent = ({item}) => {
  return (
    <Link to='/'>
        <Box>
            <Image src={`${imagePath}/${item?.poster_path}`}/>
        </Box>
    </Link>
  )
}

export default CardComponent