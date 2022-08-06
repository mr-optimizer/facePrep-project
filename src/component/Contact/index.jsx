import * as React from "react";
import classes from "./style.module.css";

import Avatar from '@mui/material/Avatar';

const Contact = ({photoSrc, name}) => {
  return (
    <div className={classes.contact}>
        <div className={classes.contact_name}>{name}</div>
        <Avatar
        alt="Shubham Kumar"
        src={photoSrc}
        style={{ width: 56, height: 56 }}
      />
    </div>
  )
}

export default Contact