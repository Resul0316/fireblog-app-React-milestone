import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export default function NewBlog() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Title" variant="outlined" required />
      <TextField id="outlined-basic" label="Image URL" variant="outlined" required />
      <TextareaAutosize
      required
      maxRows={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      style={{ width: 200 }}
    />

    </Box>
  );
}