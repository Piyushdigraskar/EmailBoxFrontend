
import {createSlice} from '@reduxjs/toolkit';

const initialEmailState = {
    emails: []
}

const EmailSlice = createSlice({
    name:"email",
    initialState: initialEmailState,
    reducers:{
        addEmailSuccess(state, action){
            state.emails.push(action.payload);
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
  

export const EmailActions = EmailSlice.actions;

export default EmailSlice.reducer;