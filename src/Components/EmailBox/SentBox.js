// SentBox.js
import React from "react";
import useEmails from '../Hooks/CustomEmail'; // Import the custom hook
import classes from "./SentBox.module.css";
import Pagination from "../Pagination/Pagination";
import { Link} from "react-router-dom";

const SentBox = () => {

  
  const { emails, allMails, unreadMails, singleEmail, deleteMailHandler, currentPage, hasNextPage, nextPage, hasPreviousPage, previousPage, lastPage, handlePageChange } = useEmails(); // Use the custom hook
  console.log(emails);
  return (
    <div className={classes.container}>
      <h1>All Emails</h1>
      <h3>Total Mail Count: {allMails}</h3>
      <h3>Total Unread Mail Count: {unreadMails}</h3>
      <ul className={classes.list}>
        {emails?.map((email) => ( // Render emails from the custom hook
          <li key={email._id} className={classes.email}>
            <span className={email.bluetick ? `${classes.checkbox} ${classes.blue}` : classes.checkbox}></span>
            <span>{email.to}</span> - <span>{email.subject}</span>
            <Link to='/mail'>
              <button onClick={() => singleEmail(email._id)} className={classes.viewButton}>View Email</button>
            </Link>
            <button onClick={() => deleteMailHandler(email._id)} className={classes.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
      <Pagination
        currentPageProp={currentPage}
        hasNextPage={hasNextPage}
        nextPage={nextPage}
        hasPreviousPage={hasPreviousPage}
        previousPage={previousPage}
        lastPage={lastPage}
        handlePageChange={handlePageChange}
      >
      </Pagination>
    </div>
  );
};

export default SentBox;
