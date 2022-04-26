import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

export default function NewBlog({blog,setBlog}) {
  //const handleClick = () => {};

  const handleChange=(e)=>{
    e.preventDefault();
    const {name, value}=e.target
    console.log(name,value)
    setBlog({...blog, [name]:value})
  }


  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        required
        name="username:"
        value={blog.title}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="outlined-basic"
        label="Image URL"
        variant="outlined"
        required
        name="url:"
        value={blog.url}
        onChange={handleChange}
      />
      <br />
      <TextareaAutosize
        required
        maxRows={4}
        aria-label="maximum height"
        placeholder="TEXT"
        style={{ width: 200, height: 300 }}
        name="text:"
        value={blog.text}
        onChange={handleChange}
      />
      <br />
      <Button
        variant="contained"
        type="submit"
        value="Submit"
        /* onClick={handleClick} */
      >
        Submit
      </Button>
    </Box>
  );
}
