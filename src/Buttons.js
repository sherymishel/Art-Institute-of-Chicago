import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Buttons({buttonName, size, variant, onClick}) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button onClick={onClick} variant={variant} size={size}>{buttonName}</Button>
        </div>
        </Box>
  )
}