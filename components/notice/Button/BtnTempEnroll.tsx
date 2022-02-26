import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function BasicButtons() {
  return (
    <Stack spacing={2}>
      <Link href="/notice" passHref>
        <Button variant="outlined">임시등록</Button>
      </Link>
    </Stack>
  );
}
