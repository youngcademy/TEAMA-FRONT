import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels() {
  const [announcement, setAnnouncement] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAnnouncement(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Notice</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={announcement}
          label="Age"
        >
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={announcement}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}>

            <MenuItem value="">
                <em>None</em>
            </MenuItem>
          <MenuItem value={10}>General Announcement</MenuItem>
          <MenuItem value={20}>Special Announcement</MenuItem>
          <MenuItem value={30}>Event Announcement</MenuItem>
          <MenuItem value={40}>Caution</MenuItem>          
        </Select>
      </FormControl>
    </div>
  );
}