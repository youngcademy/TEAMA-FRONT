import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Link href="/writingNotice" passHref>
      <Button variant="text">글쓰기</Button>
      </Link>
    </Stack>
  );
}

