import React, {  useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchdata } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setsearch] = useState('')
 const handleSearch =  async () => {
      if(search){
        // const exercisedata = await fetchdata(' https://exercisedb.p.rapidapi.com');
      }
    }
  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={900} sx={{ fontsize: { lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center">
            Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position=" relative" mb="72px">
          <TextField
          sx={{
            input: { 
            fontWeight: '700' , 
            border:'none', 
            borderRadius:'4px'
          },
          width: { lg: '1170px', xs: '350px'}
          ,
          backgroundColor: '#fff',
          borderRadius: '40px'
          
          }}
          height="76px"
          value={search}
          onChange= {(e) => setsearch(e.target.value.tolowercase())}
          placeholder="Search Exercises"
          type="text"
          
         
          />
          <Button className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'}
            ,
            height: '56px',
            position: "absolute",
            right: '0'
          }}
          onClick={handleSearch}
          > 
            Search
          </Button>

        </Box>

    </Stack>
  )
}

export default SearchExercises 