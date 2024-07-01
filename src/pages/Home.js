import React, { useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import theme from '../components/theme';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
