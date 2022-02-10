import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import { IconButton } from "@material-ui/core";
import Link from 'next/link'

function ReturnButton({ href, name }) {
    // Must add passHref to Link
    return (
      <Link href="/" passHref>
          <Button>
              About
          </Button>
      </Link>
    )
}

export default ReturnButton;