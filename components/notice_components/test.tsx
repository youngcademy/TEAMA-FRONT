import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchTable() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mr: 3, width: '100%', minWidth: '130px'}, 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search Keyword" variant="outlined" />
    </Box>
  );
}




  return (
  <div>
    <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
    <div className="container">
    {JSONDATA.filter((val)=> {
      if (searchTerm == "")
      {return val}
      else if (val.sta_nm.toLowerCase().includes(searchTerm.toLowerCase()) || val.sido_nm.toLowerCase().includes(searchTerm.toLowerCase()))
      {return val}
    }).map((val, key)=> {
      return <div className="beaches" key={key}>
        <p>{val.sta_nm}</p>
        <img src={val.beach_img}/>
        </div>
    })}
    </div>
  </div>
  );
}
