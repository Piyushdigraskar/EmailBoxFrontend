// SentBox.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../../Store/redux/Email";
import { getEmail } from "../../Store/redux/Email";
import { deleteEmail } from "../../Store/redux/Email";
// Update path as per your project
import classes from "./SentBox.module.css";
//import { v4 as uuidv4 } from 'uuid';
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const SentBox = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.emails) || [];
  const allMails = useSelector((state) => state.email.totalMails);
  const unreadMails = useSelector((state) => state.email.totalUnreadMails);
  const { currentPage, hasNextPage, nextPage, hasPreviousPage, previousPage, lastPage } = useSelector((state) => state.pagination);

  useEffect(() => {
    // Fetch emails when the component mounts
    dispatch(getEmails(currentPage));
  }, [dispatch, currentPage]); // Dependency array: dispatch and currentPage

  console.log("Emails:", emails);
  const singleEmail = (mailId) => {
    localStorage.setItem("currentEmailId", mailId);
    dispatch(getEmail(mailId));
  }

  const deleteMailHandler = (emailId) => {
    console.log('DeleteMailHandler5 Called');
    dispatch(deleteEmail(emailId));
    dispatch(getEmails(currentPage));
  }

  const handlePageChange = (page) => {
    dispatch(getEmails(page)); // Fetch emails for the selected page
  };
  console.log('Is Rerendering');
  return (
    <div className={classes.container}>
      <h1>All Emails</h1>
      <h3>
        Total Mail Count: {allMails}
      </h3>
      <h3>
        Total Unread Mail Count: {unreadMails}
      </h3>
      <ul className={classes.list}>
        {console.log(emails)}
        {Array.isArray(emails) && emails.map((email) => (
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
