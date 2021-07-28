import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { sendPost } from '../lib/post';

const StyledForm = styled.div`
  width: 30%;
  background-color: #DDAA70;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: #3A2722;
  color: white;
  font-size: 16px;
  margin: 10px 0;
  padding: 5px;
`;

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  background-color: #3A2722;
  color: white;
  font-size: 14px;
  margin: 10px 0 20px;
  padding: 5px;
`;

const StyledButton = styled.button`
  background-color: #8D8E7C;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-family: 'Osaka-Mono';
  letter-spacing: 0.1em;
  padding: 10px 15px;
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
      <StyledButton
        type="button"
        onClick={ formSubmit }
      >
        POST!!
      </StyledButton>
    </StyledForm>
  );
};

export default PostForm;
