import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { sendPost } from '../lib/post';

const StyledForm = styled.div`
  width: 30%;
  border: 2px solid purple;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid black;
  font-size: 16px;
  margin: 10px 0;
  padding: 5px;
`;

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid gray;
  font-size: 14px;
  margin: 10px 0;
  padding: 5px;
`;

const PostForm = () => {
  const history = useHistory();

  const [title, setTitle] = useState( '' );
  const [content, setContent] = useState( '' );

  const titleHandler = ( event ) => {
    setTitle( event.target.value );
  };

  const contentHandler = ( event ) => {
    setContent( event.target.value );
  };

  const formSubmit = async () => {
    await sendPost( {
      title,
      content,
    } );
    setTitle( '' );
    setContent( '' );
    history.push( '/post' );
  };

  return (
    <StyledForm>
      <h3>TITLE</h3>
      <StyledInput
        type="text"
        name="title"
        onChange={ titleHandler }
        value={ title }
        placeholder="Enter the title here."
      />
      <h3>CONTENT</h3>
      <StyledTextarea
        name="content"
        onChange={ contentHandler }
        value={ content }
        rows="5"
      />
      <button
        type="button"
        onClick={ formSubmit }
      >
        POST!!
      </button>
    </StyledForm>
  );
};

export default PostForm;
