import React, { useState, useRef } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { addEmail } from '../../Store/redux/Email';
import { useDispatch } from "react-redux";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EmailComposer = () => {

  const dispatch = useDispatch();
  const toinputRef = useRef();
  const subjectInputRef = useRef();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredTo = toinputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    // Logic to send the email
    const emailContent = convertToRaw(editorState.getCurrentContent());
    const textContent = emailContent.blocks.map(block => block.text).join('\n');

    const EmailDetails = {
      to:enteredTo,
      subject: enteredSubject,
      content: textContent
    }

    dispatch(addEmail(EmailDetails));
    console.log("To:", enteredTo);
    console.log("Subject:", enteredSubject);
    console.log("Email Content:", textContent);

    // You can use emailContentRef.current to access email content if needed
    toinputRef.current.value = '';
    subjectInputRef.current.value = '';
    
  };

  return (
    <form onSubmit={SubmitHandler}>
      <h2 style={{ textAlign: 'center' }}>Send Email</h2>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="email"
          id="to"
          ref={toinputRef}
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          ref={subjectInputRef}
        />
      </div>
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={setEditorState}
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailComposer;
