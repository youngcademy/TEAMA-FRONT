import React from 'react';
import Head from "next/head";
import { Grid, Box, Container, Typography } from '@mui/material';
import Item from "./Item";
import { useRouter } from "next/router";
import Select from "../../components/notice_components/Select";
import ReturnButton from "../../components/notice_components/Btn"
import { styled } from '@mui/material/styles';

export default function notice () {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Notice Board</title>
            </Head>
            <Box
                component="main"
                sx={{
                    mt: '1rem',
                    flexDirection: 'row',
                    width: "70%",
                    height: 60,
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                    },
                }}>
                <Item><Select/></Item>
            </Box>
            <Box
                component="main"
                sx={{
                flexDirection: 'row',
                        width: "20%",
                        height: 60
                    }}>
                <Item><ReturnButton/></Item>
            </Box>
        </div>
    )
};