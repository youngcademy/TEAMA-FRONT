import React from 'react';
import Head from "next/head";
import { Grid, Box, Button} from '@mui/material';
import Item from "../components/notice_components/Item";
import { useRouter } from "next/router";
import Select from "../components/notice_components/Select";
import ReturnButton from "../components/notice_components/Btn";
import Link from 'next/link'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import MyButton from '../components/notice_components/TestBtn';
import MyBtn from '../components/notice_components/TestBtn';

export default function notice () {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Notice Board</title>
            </Head>
            <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(11, 1fr)',
                gridAutoColumns: '1fr',
                gap: 1,
                flexGrow: 1 }}>
                        {/*1열 : 공지사항 종류 검색 + return 버튼*/}
                        <Item sx={{flexWrap: 'wrap', minWidth: 'min-content',  gridRow: '1', gridColumn: '1/6' }}><Select/></Item>
                        <Item sx={{ gridRow: '1', gridColumn: '11/12', justifyContent: 'center'}}>
                            <MyBtn />
                        </Item>
                        {/*2열 : 공지사항 종류, 위의 Select 내부 값을 받아서*/}
                        <Item sx={{ gridRow: '2', gridColumn: '1/12' }}>공지사항 종류</Item>
                        {/*3열 : 검색 조건, 검색 키워드, 검색 버튼*/}
                        <Item sx={{ gridRow: '3', gridColumn: '1/5' }}>검색 조건</Item>
                        <Item sx={{ gridRow: '3', gridColumn: '5/9' }}>검색 키워드</Item>
                        <Item sx={{ gridRow: '3', gridColumn: '9/10' }}>검색 버튼</Item>
                        {/*4열 : 번호, 태그, 제목, 작성자 등 분류 조건*/}
                        <Item sx={{ gridRow: '4', gridColumn: '1/6' }}>[번호][공지사항 종류][태그][제목]</Item>
                        <Item sx={{ gridRow: '4', gridColumn: '7/12' }}>[작성자][작성일][조회수]</Item>
                        {/*5열 : 공지사항 리스트*/}
                        <Item sx={{ gridRow: '5', gridColumn: '1/12' }}>[리스트]</Item>
                        {/*6열 : 1,2,3,4,5 페이지 버튼 + 글쓰기*/}
                        <Item sx={{ gridRow: '6', gridColumn: '1/10' }}>1,2,3,4,5</Item>
                        <Item sx={{ gridRow: '6', gridColumn: '10/12' }}>글쓰기</Item>
            </Box>
        </div>
    )
};