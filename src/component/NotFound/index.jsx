import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import classes from "./style.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={classes.error_page}>
         <div className={classes.content}>
            <h2 className={classes.error_page_header} data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div className={classes.btn}>
               <Link to="/">return home</Link>
               <a href="mailto:sktovisit@gmail.com">report problem</a>
            </div>
         </div>
      </div>
    </div>
  )
}

export default NotFound;