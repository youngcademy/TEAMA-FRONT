import React from 'react';
import Head from "next/head";
import { Grid, Box, Button} from '@mui/material';
import Item from "../components/notice_components/Item";
import { useRouter } from "next/router";
import Select from "../components/notice_components/Select";
import MyBtn from '../components/notice_components/UndoBtn';
import WriteBtn from "../components/notice_components/WritingBtn";
import names from "../components/notice_components/Select";
import NotiTable from "../components/notice_components/NotificationTable";
import SearchText from "../components/notice_components/SearchTextField";
import SearchOption from "../components/notice_components/SearchOptionSelect";
import InputText from "../components/notice_components/InputTextwIcon";

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
                flexGrow: 1 }}
            >
                {/*1열 : 공지사항 종류 검색 + return 버튼*/}
                <Box sx={{flexWrap: 'wrap', minWidth: 'min-content',  gridRow: '1', gridColumn: '1/6' }}>
                    <Select/>
                </Box>
                <Item sx={{ gridRow: '1', gridColumn: '11/12', justifyContent: 'center'}}>
                    <MyBtn />
                </Item>
                {/*2열 : 공지사항 종류, 위의 Select 내부 값을 받아서*/}
                <Item sx={{ gridRow: '2', gridColumn: '1/12' }}>
                    "공지사항 종류"
                </Item>
                {/*3열 : 검색 조건, 검색 키워드, 검색 버튼*/}
                <Item sx={{ gridRow: '3', gridColumn: '3/5', minWidth: 'min-content', justifyContent: "right"}}>
                    <SearchOption/>
                </Item>
                <Item sx={{flexWrap: 'wrap', minWidth: 'min-content', gridRow: '3', gridColumn: '5/9', alignItems: 'end'}}>
                    <InputText/>
                </Item>
                {/*4열 : 번호, 태그, 제목, 작성자 등 분류 조건+작성자,작성일, 조회수
                    공지사항 리스트
                    12345 페이지 버튼, 글쓰기 버튼
                    table로 위 요소들을 한 번에 넣을 수 있다고 확인*/}
                <Box sx={{ gridRow: '4', gridColumn: '1/12' }}>
                    <NotiTable/>
                </Box>
            </Box>
        </div>
    )
};