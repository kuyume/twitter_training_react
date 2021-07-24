const getAllPostObjects = async () => {
  const gotAllPostObjects = await fetch( 'http://localhost:2500/post', {
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
  const gotPostObject = await fetch( `http://localhost:2500/post/${postId}`, {
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
  const gotPostObject = await fetch( 'http://localhost:2500/user/60ec1ed6a56c19643c998bc3/post/create', {
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
export { getAllPostObjects, getPostById, sendPost };
