import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import Tooltip from '@mui/material/Tooltip';

export default function UndoButtons() {
  return (
      <Tooltip title="Return">
        <Link href="/" passHref>
            <Button variant="outlined"
                    sx={{position : 'absolute', right: '20px'}}>
              <UndoIcon/>
            </Button>
          </Link>
      </Tooltip>
  );
}
