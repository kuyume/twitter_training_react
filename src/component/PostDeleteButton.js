import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deletePost } from '../lib/post';

const StyledButton = styled.button`
  background-color: #8D8E7C;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-family: 'Osaka-Mono';
  letter-spacing: 0.1em;
  padding: 10px 15px;
`;

const PostDeleteButton = ( props ) => {
  const history = useHistory();

  const { postId } = props;

  const postDeleteHandler = () => {
    deletePost( postId );
    history.push( '/post' );
  };
  return (
    <>
      <StyledButton
        type="button"
        onClick={ postDeleteHandler }
      >
        DELETE
      </StyledButton>
    </>
  );
};

export default PostDeleteButton;
