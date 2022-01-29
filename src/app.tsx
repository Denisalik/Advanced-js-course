import { styled, Typography } from '@mui/material';
import React from 'react';

const App = () => {
    const Hello = styled(Typography)(({ theme }) => ({
        color: "red"
      }));
    return(
        <Hello>Hello world для проекта - ijl</Hello>
    )
}

export default App;

