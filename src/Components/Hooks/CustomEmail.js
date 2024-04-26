// useEmails.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmails, getEmail, deleteEmail } from '../../Store/redux/Email'

const useEmails = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.email.emails) || [];
  const allMails = useSelector((state) => state.email.totalMails);
  const unreadMails = useSelector((state) => state.email.totalUnreadMails);
  const { currentPage, hasNextPage, nextPage, hasPreviousPage, previousPage, lastPage } = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(getEmails(currentPage));
  }, [dispatch, currentPage]);

  const singleEmail = (mailId, navigate) => {
    localStorage.setItem("currentEmailId", mailId);
    dispatch(getEmail(mailId));
  };

  const deleteMailHandler = (emailId) => {
    dispatch(deleteEmail(emailId));
    dispatch(getEmails(currentPage));
  };

  return { emails, allMails, unreadMails, singleEmail, deleteMailHandler,currentPage, hasNextPage, nextPage, hasPreviousPage, previousPage, lastPage };
};

export default useEmails;
