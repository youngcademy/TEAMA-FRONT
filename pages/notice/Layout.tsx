import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';

const Layout = () => {
    <Box
    component="main"
    sx={{
    flexGrow: 1,
    py: 8
    }}
    >
    <Container maxWidth="lg">
    <Typography
    sx={{ mb: 3 }}
    variant="h4"
    >
    Account
    </Typography>
    </Container>
    </Box>
}

export default Layout;