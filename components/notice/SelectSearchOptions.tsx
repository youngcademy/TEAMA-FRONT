import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

// 아이템과 메뉴의 스타일, 높이를 지정

const options = [
  {
    value: 'Title',
    label: 'Title',
  },
  {
    value: 'Writer',
    label: 'Writer',
  },
  {
    value: 'tag',
    label: 'tag',
  },
];

//NotificationSelect라는 이름으로 생성
export default function SelectOptions() {
  const theme = useTheme();
  const [searchOptions, setsearchOptions] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsearchOptions(event.target.value);
  };

  return (
    <div>
            <Box sx ={{minWidth:'content'}}>
              <TextField
                  sx ={{width:200}}
                  select
                  id="demo-simple-select"
                  label="Options"
                  value={searchOptions}
                  onChange={handleChange}
              >
                  {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
              </TextField>
            </Box>
      </div>
  );
}