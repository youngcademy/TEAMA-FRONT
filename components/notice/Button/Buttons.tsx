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

export default function Buttons() {
  const HrefList: string[] = ["/", "writingNotice", "/notice"];
  const TitleList: string[] = ["Enroll", "TempEnroll"];

  return (
    <Stack spacing={2}>
      <Link href={HrefList[1]} passHref>
        <Button variant="outlined" color="primary">
          {TitleList[1]}
        </Button>
      </Link>
    </Stack>
  );
}
