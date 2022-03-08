import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";
import Calendar from "../Calendar";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getDay();
  const day = today.getDate();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="today" {...a11yProps(0)} />
          <Tab label="yesterday" {...a11yProps(1)} />
          <Tab label="tomorrow" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <Typography variant="h4">
            Today: {`${year} / ${month} / ${day}`}
          </Typography>
          <Box>
            <Calendar />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  width: "10vw",
                  height: "7vh",
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2vw",
                  }}
                >
                  출석
                </Typography>
              </Button>
            </Box>
            <Fab variant="extended">
              <NavigationIcon sx={{ mr: 1 }} />
              Send Message
            </Fab>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          <Typography variant="h4">
            Yesterday: {`${year} / ${month} / ${day - 1}`}
          </Typography>
          <Box>
            <Calendar />
          </Box>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box>
          <Typography variant="h4">
            Tomorrow: {`${year} / ${month} / ${day + 1}`}
          </Typography>
          <Box>
            <Calendar />
          </Box>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Box>
      </TabPanel>
    </Box>
  );
}
