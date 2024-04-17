
import {createSlice} from '@reduxjs/toolkit';
import { setPageData } from './Pagination';

const initialEmailState = {
    emails: []
}

const EmailSlice = createSlice({
    name:"email",
    initialState: initialEmailState,
    reducers:{
        addEmailSuccess(state, action){
            state.emails.push(action.payload);
        },
        getEmailsSuccess(state, action){
          state.emails = action.payload;
        },
        getEmailSuccess(state, action){
          state.emails = action.payload;
        },
        deleteEmailSuccess(state, action){
          const id = action.payload;
          state.emails = state.emails.filter(email => email._id !== id);
        }
    }
})

export const addEmail = emailDetails => async dispatch => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:4000/email/addemail`, {
        method:"POST",
        body:JSON.stringify(emailDetails),
        headers:{
          'content-type':'application/json',
          "Authorization": token
        }
      });
      if (response.ok) {
        dispatch(EmailSlice.actions.addEmailSuccess(emailDetails));
      } else {
        throw new Error('Item not added to Backend');
      }
    } catch (error) {
      console.log(error);
    }
  };

export const getEmails = page => async dispatch =>{
  try {
    const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:4000/email/getemails?page=${page}`, {
        method:"GET",
        headers:{
          "Authorization": token
        }
      });
      if(response.ok){
        const data = await response.json();
        console.log("Data from backend:", data);
        dispatch(EmailSlice.actions.getEmailsSuccess(data.Emails))
        dispatch(setPageData({
          currentPage: data.currentPage,
          hasNextPage: data.hasNextPage,
          nextPage: data.nextPage,
          hasPreviousPage: data.hasPreviousPage,
          previousPage: data.previousPage,
          lastPage: data.lastPage
        }));
      }
      else{
        throw new Error('Failed to fetch emails');
      }
  } catch (error) {
    console.log(error);
  }
}

export const getEmail = (mailId) =>async dispatch => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:4000/email/getemail/${mailId}`, {
        method: "GET",
        headers: {
          "Authorization": token
        }
    });

    if(response.ok){
      const data = await response.json();
      console.log(data.email)
      dispatch(EmailSlice.actions.getEmailSuccess(data.email));
    } else {
      throw new Error('Failed to fetch a single Mail');
    }
  } catch (error) {
      console.log(error);
  }
}

export const deleteEmail = (id) =>async dispatch =>{
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:4000/email/deleteemail/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": token
        }
    });
    if(response.ok){
      dispatch(EmailSlice.actions.deleteEmailSuccess(id));
    }
    else{
      throw new Error('Response is not ok While deleting the email');
    }
  } catch (error) {
    console.log(error);
  }
}

export const EmailActions = EmailSlice.actions;

export default EmailSlice.reducer;