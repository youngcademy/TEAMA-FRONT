import * as React from "react";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const ITEM_HEIGHT = 48;

const names = [
  {
    value: "Entire Announcement",
    label: "Entire Announcement",
  },
  {
    value: "Special Announcement",
    label: "Special Announcement",
  },
  {
    value: "Event Announcement",
    label: "Event Announcement",
  },
  {
    value: "Caution",
    label: "Caution",
  },
];

export default function SelectNotices() {
  const [notificationName, setNotificationName] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationName(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ display: "inline", m: 1 }}>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Box sx={{ minWidth: "content" }}>
          <TextField
            sx={{ width: 240 }}
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
      <Box
        sx={{
          display: "inline-block",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "45px",
          width: "100%",
          position: "absoulte",
          top: "50%",
          left: "50%",
          borderbottom: "5px solid lime",
          marginBottom: "15px",
          color: "Black",
        }}
      >
        {notificationName}
      </Box>
    </div>
  );
}
