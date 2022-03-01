import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

export default function CustomizedInputBase() {
  return (
    <Box
      component="form"
      sx={{
        height: "100%",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: 1,
        borderRadius: "4px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
}
