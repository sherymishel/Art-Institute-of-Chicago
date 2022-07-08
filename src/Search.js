import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search({setSearch}) {

  const onChange = e => setSearch(e.target.value)
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onChange} id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}