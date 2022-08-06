import classes from "./style.module.css";

import Avatar from '@mui/material/Avatar';

const Contact = ({photoSrc, name}) => {
  return (
    <div className={classes.contact}>
        <div className={classes.contact_name}>{name}</div>
        <Avatar
        alt="img"
        src={photoSrc}
        style={{ width: 55, height: 55 }}
      />
    </div>
  )
}

export default Contact;