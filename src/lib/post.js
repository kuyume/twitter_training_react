const ROOT_URL = 'https://160.16.106.167:2500';

const getAllPostObjects = async () => {
  const gotAllPostObjects = await fetch( `${ROOT_URL}/post`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  } )
    .then( ( res ) => res.json() )
    .catch( ( err ) => err );

  return gotAllPostObjects;
};

const getPostById = async ( postId ) => {
  const gotPostObject = await fetch( `${ROOT_URL}/post/${postId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  } )
    .then( ( res ) => res.json() )
    .catch( ( err ) => err );

  return gotPostObject;
};

const sendPost = async ( postObject ) => {
  const gotPostObject = await fetch( `${ROOT_URL}/user/60ec1ed6a56c19643c998bc3/post/create`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( postObject ),
  } )
    .then( ( res ) => res.json() )
    .catch( ( err ) => err );

  return gotPostObject;
};

const deletePost = async ( postId ) => {
  await fetch( `${ROOT_URL}/user/60ec1ed6a56c19643c998bc3/post/delete/${postId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  } )
    .then( ( res ) => res.json() )
    .catch( ( err ) => err );

  return 'post deleted';
};

export {
  getAllPostObjects, getPostById, sendPost, deletePost,
};
