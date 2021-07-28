import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllPostObjects } from '../lib/post';
import PostDeleteButton from './PostDeleteButton';

const Articles = styled.div`
  background-color: #C9A98B;
  width: 70%;
  margin-top: 80px;
  padding: 20px;
`;

const Article = styled.article`
  background-color: #C37D63;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  margin: 30px 10px;
  a {
    color: #3A2722;
    font-size: 24px;
    font-weight: 600;
  }
`;

const PostArchive = () => {
  const [allPostObjects, setAllPostObjects] = useState( [{ title: 'Loading...' }] );
  useEffect( () => {
    let isMounted = true;
    if ( isMounted ) {
      getAllPostObjects()
        .then( ( gotAllPostObjects ) => {
        // console.log(gotAllPostObjects)
          setAllPostObjects( gotAllPostObjects );
        } )
        .catch( ( err ) => err );
    }
    return () => {
      isMounted = false;
    };
  }, [allPostObjects] );

  return (
    <Articles>
      { Array.isArray( allPostObjects )
        ? allPostObjects.map( ( value ) => (
          <Article key={ value._id }>
            <Link to={ `/post/${value._id}` }>
              {value.title}
            </Link>
            <PostDeleteButton postId={ value._id } />
          </Article>
        ) )
        : 'Loading...'}
    </Articles>
  );
};

export default PostArchive;
