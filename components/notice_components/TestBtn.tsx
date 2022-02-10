import Link from 'next/link';
import SaveIcon from "@material-ui/icons/Save";
import React from "react";
import { Button } from "@material-ui/core";

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
          <Button variant="text" color="secondary" startIcon={<SaveIcon />}>Text</Button>
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