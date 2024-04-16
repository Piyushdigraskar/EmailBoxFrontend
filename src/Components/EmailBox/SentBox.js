// SentBox.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../../Store/redux/Email";
import { getEmail } from "../../Store/redux/Email";
 // Update path as per your project
import classes from "./SentBox.module.css";
//import { v4 as uuidv4 } from 'uuid';
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const SentBox = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.emails) || [];
  const { currentPage, hasNextPage, nextPage, hasPreviousPage, previousPage, lastPage } = useSelector((state) => state.pagination);

  useEffect(() => {
    // Fetch emails when the component mounts
    dispatch(getEmails(currentPage));
  }, [dispatch, currentPage]); // Dependency array: dispatch and currentPage

  console.log("Emails:", emails); 
  const singleEmail = (mailId)=>{
    localStorage.setItem("currentEmailId", mailId);
    dispatch(getEmail(mailId));
  }

  const handlePageChange = (page) => {
    dispatch(getEmails(page)); // Fetch emails for the selected page
  };
  console.log('Is Rerendering');
  return (
    <div className={classes.container}>
      <h1>All Emails</h1>
      <ul className={classes.list}>
      {console.log(emails)}
        {Array.isArray(emails) && emails.map((email) => (
          <li key={email._id} className={classes.email}>
            <span>{email.to}</span> - <span>{email.subject}</span>
            <Link to='/mail'>
            <button onClick={() => singleEmail(email._id)} className={classes.viewButton}>View Email</button>
            </Link>
            <button className={classes.deleteButton}>Delete</button>
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