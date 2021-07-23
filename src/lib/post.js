const getAllPostObjects = async () => {
  const gotAllPostObjects = await fetch(
    'http://localhost:2500/post',
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then( ( res ) => res.json() )
    .catch( ( err ) => ( err ) )

  return gotAllPostObjects
}

export default getAllPostObjects
