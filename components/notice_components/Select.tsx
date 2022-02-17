import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: 250,
    },
  },
};

const names = [
  "All",
  "General Announcement",
  "Special Announcement",
  "Event Announcement",
  "Caution",
];

///////////////////////////////////////////////////////////////


function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function NotificationSelect() {
  const theme = useTheme();
  const [notificationName, setNotificationName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof notificationName>) => {
    const {
      target: { value },
    } = event;
    setNotificationName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
		<FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">
        Notice
      </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={""}
            label=""
          >
          </Select>
    </FormControl>	
      <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="notification-name-label">Types</InputLabel>
        <Select
          labelId="notification-name-label"
          id="notification-name"
          value={notificationName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((names) => (
            <MenuItem
              key={names}
              value={names}
              style={getStyles(names, notificationName, theme)}
            >
              {names}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

