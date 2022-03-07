import Head from "next/head";
import { Box } from "@mui/material";
import Item from "../components/notice/Item";
import { useRouter } from "next/router";
import Select from "../components/notice/SelectNoticesWithProps";
import NotiTable from "../components/notice/NotificationTable";
import SearchOption from "../components/notice/SelectSearchOptions";
import InputText from "../components/notice/InputText";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import * as React from "react";
import UndoIcon from "@mui/icons-material/Undo";
import Tooltip from "@mui/material/Tooltip";

const HrefList: string[] = ["/", "writingNotice", "/notice"];
const TitleList: string[] = ["Enroll", "TempEnroll", "Exit", "Undo"];

export default function notice() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Notice Board</title>
      </Head>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(11, 1fr)",
          gridAutoColumns: "1fr",
          flexGrow: 1,
        }}
      >
        {/*1열 : 공지사항 종류 검색 + return 버튼*/}
        <Box
          sx={{
            flexWrap: "wrap",
            minWidth: "min-content",
            gridRow: "1",
            gridColumn: "1/11",
          }}
        >
          <Select />
        </Box>
        <Box
          sx={{
            flexWrap: "wrap",
            minWidth: "min-content",
            gridRow: "1",
            gridColumn: "11/12",
          }}
        >
          <Stack spacing={2}>
            <Link href={HrefList[0]} passHref>
              <Button
                variant="outlined"
                sx={{ position: "absolute", right: "20px" }}
              >
                {TitleList[3]}
              </Button>
            </Link>
          </Stack>
        </Box>
        {/*3열 : 검색 조건, 검색 키워드, 검색 버튼*/}
        <Item
          sx={{
            gridRow: "2",
            gridColumn: "3/5",
            minWidth: "min-content",
            justifyContent: "right",
          }}
        >
          <SearchOption />
        </Item>
        <Item
          sx={{
            flexWrap: "wrap",
            minWidth: "min-content",
            gridRow: "2",
            gridColumn: "5/9",
            alignItems: "end",
          }}
        >
          <InputText />
        </Item>
        {/*4열 : 번호, 태그, 제목, 작성자 등 분류 조건+작성자,작성일, 조회수
                    공지사항 리스트
                    12345 페이지 버튼, 글쓰기 버튼
                    table로 위 요소들을 한 번에 넣을 수 있다고 확인*/}
        <Box sx={{ gridRow: "4", gridColumn: "1/12" }}>
          <NotiTable />
        </Box>
      </Box>
    </>
  );
}
