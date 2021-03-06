import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import Item from "../../../components/notice/Item";
import Select from "../../../components/notice/SelectOnlyNotices";
import Ebtn from "../../../components/notice/Button/BtnEnroll";
import TempBtn from "../../../components/notice/Button/BtnTempEnroll";
import OneInput from "../../../components/notice/OneInput";
import ExitBtn from "../../../components/notice/Button/BtnExit";
import dynamic from "next/dynamic";
export default function notice() {
  const PostEditor = dynamic(
    () => import("../../../components/notice/ToastTextEditor"),
    { ssr: false }
  );

  return (
    <>
      <Head>
        <title>Writing Notice</title>
      </Head>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(11, 1fr)",
          gridAutoColumns: "1fr",
          gap: 1,
          flexGrow: 1,
        }}
      >
        {/*1열 : title, 임시등록 버튼, 등록 버튼*/}
        <Item
          sx={{
            flexWrap: "wrap",
            minWidth: "min-content",
            gridRow: "1",
            gridColumn: "1/3",
          }}
        >
          title: 글쓰기
        </Item>
        <Item
          sx={{
            gridRow: "1",
            gridColumn: "10/11",
            minWidth: "min-content",
            justifyContent: "center",
          }}
        >
          <TempBtn />
        </Item>
        <Item
          sx={{
            gridRow: "1",
            gridColumn: "11/12",
            minWidth: "min-content",
            justifyContent: "center",
          }}
        >
          <Ebtn />
        </Item>
        {/*2열 : 공지사항 종류 결정*/}
        <Box sx={{ gridRow: "2", gridColumn: "1/10", minWidth: "min-content" }}>
          <Select />
        </Box>
        <Item sx={{ gridRow: "3", gridColumn: "1/11", maxWidth: "900px" }}>
          <OneInput />
        </Item>
        {/*3열 : 검색 조건, 검색 키워드, 검색 버튼*/}
        {/*5열 : 공지사항 리스트*/}
        <Box
          sx={{
            display: "inline-block",
            gridRow: "4",
            gridColumn: "1/10",
            minWidth: "min-content",
            maxWidth: "900px",
            Height: "min-content",
          }}
        >
          <PostEditor />
        </Box>
        <Box
          sx={{
            gridRow: "4",
            gridColumn: "11/12",
            position: "relative",
            top: "350px",
          }}
        >
          <ExitBtn />
        </Box>
      </Box>
    </>
  );
}
