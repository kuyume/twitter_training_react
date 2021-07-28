import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPostById } from '../lib/post';

const Article = styled.article`
  box-sizing: border-box;
  border: 2px solid blue;
  width: 70%;
  margin-top: 80px;
  border: 2px solid blue;
  padding: 10px;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  line-height: 1.5;
  margin: 10px 0;
`;

const StyledContent = styled.h3`
  font-size: 20px;
  line-height: 1.5;
  margin: 50px 0 10px;
`;

const PostDetail = () => {
  const { id } = useParams();
  const [postObject, setPostObject] = useState( [{ title: 'Loading...' }] );
  useEffect( () => {
    getPostById( id )
      .then( ( gotAllPostObjects ) => {
        // console.log(gotAllPostObjects)
        setPostObject( gotAllPostObjects );
      } )
      .catch( ( err ) => err );
  }, [] );

  return (
    <Article>
      <StyledTitle>
        title:&nbsp;
        {postObject.title}
      </StyledTitle>
      <p>
        author:&nbsp;
        {postObject.owner}
      </p>
      <StyledContent>{postObject.content}</StyledContent>
    </Article>
  );
};
export default PostDetail;
