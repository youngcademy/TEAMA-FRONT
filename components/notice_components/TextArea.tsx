import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TextFields() {
    const [value, setValue] = React.useState('Controlled');
    const [formats, setFormats] = React.useState(() => []);
    const handleFormat = (
      event: React.MouseEvent<HTMLElement>,
      newFormats: string[],
    ) => {
      setFormats(newFormats);
    };  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
  
    return (
        <>
        <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold" aria-disabled="false" aria-pressed="false">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>

            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { mr: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={10}
                    />
                </div>
            </Box>
        </>
    );
  }