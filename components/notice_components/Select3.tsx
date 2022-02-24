import * as React from 'react';
import { Grid, Box, Button} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import UndoBtn from './UndoBtn';
import Item from "./Item";
import { Theme, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// 아이템과 메뉴의 스타일, 높이를 지정
const ITEM_HEIGHT = 48;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: 250,
      },
    },
};

// 안에 들어갈 내용 생성
const names = [
    "",
    "General Announcement",
    "Special Announcement",
    "Event Announcement",
    "Caution",
];

// 스타일 지정
function getStyles(name: string, noticeName: string[], theme: Theme) {
    return {
      fontWeight:
        noticeName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

// 함수 생성
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
        <Box sx={{display: 'inline', m: 1, minWidth: 240}}>
        <FormControl sx={{ m: 1, width: 220 }}>
                <InputLabel id="demo-simple-select-helper-label">
                    Notice
                </InputLabel>
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
        </Box>
    </div>
  );
}