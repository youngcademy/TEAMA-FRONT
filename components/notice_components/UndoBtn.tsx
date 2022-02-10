import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
          <Button variant="text" color="secondary" ><UndoIcon/></Button>
      </a>
    )
  })

function MyBtn() {
    return (
      <Link href="/" passHref>
        <MyButton />
      </Link>
    )
}
  
export default MyBtn