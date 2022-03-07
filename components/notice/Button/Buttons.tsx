import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

enum ButtonTitle {
  Enroll = "Enroll",
  TempEnroll = "TempEnroll",
  Exit = "Exit",
  Undo = "Undo",
  Writing = "Writing",
}

const HrefList: string[] = ["/", "writingNotice", "/notice"];
const TitleList: string[] = ["Enroll", "TempEnroll"];

export default function Buttons(HrefList:string,TitleList:string) {

  return (
    <Stack spacing={2}>
      <Link href={HrefList[]} passHref>
        <Button variant="outlined" color="primary">
          {TitleList[]}
        </Button>
      </Link>
    </Stack>
  );
}
