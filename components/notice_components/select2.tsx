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

const names = [
  {
    value: 'Entire Announcement',
    label: 'Entire Announcement',
  },
  {
    value: 'Special Announcement',
    label: 'Special Announcement',
  },
  {
    value: 'Event Announcement',
    label: 'Event Announcement',
  },
  {
    value: 'Caution',
    label: 'Caution',
  },
];

//NotificationSelect라는 이름으로 생성
export default function SelectNotices() {
  const theme = useTheme();
  const [notificationName, setNotificationName] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationName(event.target.value);
  };

  return (
    <div>
        <FormControl sx={{ display:'inline', m: 1}}>
                <InputLabel id="demo-simple-select-helper-label">
                </InputLabel>
            <Box sx ={{minWidth:'content'}}>
              <TextField
                  sx ={{width:200}}
                  select
                  id="demo-simple-select"
                  label="notice"
                  value={notificationName}
                  onChange={handleChange}
              >
                  {names.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
              </TextField>
            </Box>
        </FormControl>
        <Box sx ={{display: 'inline-block', 
                  textAlign:'center',
                  fontWeight:'700', 
                  fontSize:'45px',
                  width:'100%', 
                  position:'absoulte', 
                  top:'50%', 
                  left:'50%',
                  borderbottom: '5px solid lime',
                  marginBottom: '15px',
                  color: 'Black',
                  }}>
            {notificationName}
        </Box>
    </div>
  );
}