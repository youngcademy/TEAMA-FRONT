import React from 'react';
import Head from "next/head";
import { Grid, Box, Container, Typography } from '@mui/material';
import Item from "./Item";

export default function notice () {
    return (
        <>
            <Head>
                <title>Notice Board</title>
            </Head>
            <Box
                component="main"
                sx={{
                    mt: '1rem',
                    flexDirection: 'row-reverse',
                    width: "100%",
                    height: 60,
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                    },
                }}>
                <Item>
                    2sssss
                </Item>
                <Container maxWidth="lg">
                    <Typography
                    sx={{ mb: 3 }}
                    variant="h4"
                    >
                    <Grid
                        container
                        spacing={3}>

                    </Grid>

                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}>
                    </Grid>
                    </Typography>
                </Container>
            </Box>
        </> 
    )
};