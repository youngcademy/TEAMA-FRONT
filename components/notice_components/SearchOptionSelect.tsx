import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const MenuProps = {
  PaperProps: {
    style: {
      width: 200
    },
  },
};

const names = [
  "Title",
  "Writer",
  "tag",
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

export default function SearchOptionSelect() {
  const theme = useTheme();
  const [optionName, setOptionName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof optionName>) => {
    const {
      target: { value },
    } = event;
    setOptionName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
        <FormControl sx={{ m: 0, width: "100%" }}>
            <InputLabel id="notification-name-label">Option</InputLabel>
            <Select
            labelId="notification-name-label"
            id="notification-name"
            value={optionName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            >
            {names.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, optionName, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    </div>
  );
}