const getSelfUserObj = async ( selfUserId ) => {
  const gotSelfUserObj = await fetch(
    `http://localhost:2500/user/${selfUserId}`,
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

  return gotSelfUserObj
}

export default getSelfUserObj
