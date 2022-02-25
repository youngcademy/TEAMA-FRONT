import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [searchOption, setsearchOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setsearchOption(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchOption}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={Title}>Title</MenuItem>
          <MenuItem value={Writer}>Writer</MenuItem>
          <MenuItem value={Tag}>Tag</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}