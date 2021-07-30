const ROOT_URL = 'http://160.16.106.167:2500';

const getSelfUserObj = async ( selfUserId ) => {
  const gotSelfUserObj = await fetch(
    `${ROOT_URL}/user/${selfUserId}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then( ( res ) => res.json() )
    .catch( ( err ) => err );

  return gotSelfUserObj;
};
export default getSelfUserObj;
