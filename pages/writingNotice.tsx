import React from 'react';
import Head from "next/head";
import { Grid, Box, Button} from '@mui/material';
import Item from "../components/notice_components/Item";
import { useRouter } from "next/router";
import Select from "../components/notice_components/Select";
import MyBtn from '../components/notice_components/UndoBtn';
import Ebtn from "../components/notice_components/EnrollBtn";
import TempBtn from "../components/notice_components/TmprBtn";
import InputText from "../components/notice_components/InputText";
import TextArea from "../components/notice_components/TextArea";
import OneInput from "../components/notice_components/OneInput";
import ExitBtn from "../components/notice_components/ExitBtn";

export default function notice () {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Writing Notice</title>
            </Head>
            <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(11, 1fr)',
                gridAutoColumns: '1fr',
                gap: 1,
                flexGrow: 1 }}>
                        {/*1열 : title, 임시등록 버튼, 등록 버튼*/}
                        <Item sx={{flexWrap: 'wrap', minWidth: 'min-content',  gridRow: '1', gridColumn: '1/3' }}>
                            title: 글쓰기
                        </Item>
                        <Item sx={{ gridRow: '1', gridColumn: '10/11', justifyContent: 'center'}}>
                            <TempBtn />
                        </Item>
                        <Item sx={{ gridRow: '1', gridColumn: '11/12', justifyContent: 'center'}}>
                            <Ebtn />
                        </Item>
                        {/*2열 : 공지사항 종류 결정*/}
                        <Item sx={{ gridRow: '2', gridColumn: '1/4', minWidth: 'min-content' }}>
                            <Select/>
                        </Item>
                        <Item sx={{ gridRow: '3', gridColumn: '1/10' }}><OneInput/></Item>
                        {/*3열 : 검색 조건, 검색 키워드, 검색 버튼*/}
                        <Item sx={{ gridRow: '4', gridColumn: '1/10' }}>툴바 1: 사진, 일정 표</Item>
                        {/*4열 : 번호, 태그, 제목, 작성자 등 분류 조건*/}
                        {/*5열 : 공지사항 리스트*/}
                        <Item sx={{ gridRow: '6', gridColumn: '1/10' }}><TextArea/></Item>
                        <Item sx={{ gridRow: '7', gridColumn: '11/12'}}><ExitBtn/></Item>
            </Box>
        </div>
    )
};