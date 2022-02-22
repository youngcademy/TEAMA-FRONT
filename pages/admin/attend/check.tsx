import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TabList from "../../../components/attend/TabList";

const attendmendCheckAdmin = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          padding: "0 0 1rem 0",
        }}
      >
        출퇴근 기록
      </Typography>
      <Box>
        <TabList />
      </Box>
    </Box>
  );
};

export default attendmendCheckAdmin;
