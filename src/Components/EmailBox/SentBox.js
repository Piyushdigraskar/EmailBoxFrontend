// SentBox.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../../Store/redux/Email";
 // Update path as per your project
import classes from "./SentBox.module.css";
//import { v4 as uuidv4 } from 'uuid';
import Pagination from "../Pagination/Pagination";

const SentBox = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.emails) || [];
  const { currentPage, hasNextPage, nextPage, hasPreviousPage, previousPage, lastPage } = useSelector((state) => state.pagination);

  useEffect(() => {
    // Fetch emails when the component mounts
    dispatch(getEmail(currentPage));
  }, [dispatch, currentPage]); // Dependency array: dispatch and currentPage

  console.log("Emails:", emails); 

  const handlePageChange = (page) => {
    dispatch(getEmail(page)); // Fetch emails for the selected page
  };

  return (
    <div className={classes.container}>
      <h1>All Emails</h1>
      <ul className={classes.list}>
      {console.log(emails)}
        {emails.map((email) => (
          <li key={email._id} className={classes.email}>
            <span>{email.to}</span> - <span>{email.subject}</span>
            <button>View Email</button>
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
