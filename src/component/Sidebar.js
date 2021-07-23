import { useEffect, useState } from 'react'
import styled from 'styled-components'
import getSelfUserObj from '../lib/user'

const Sidebar = () => {
  const StyledSidebar = styled.aside`
    box-sizing: border-box;
    border: 2px solid orange;
    width: 30%;
    position: fixed;
    top: 80px;
    right: 0;
  `

  const tempUserId = '60ec1ed6a56c19643c998bc3'
  const [selfUserObj, setSelfUserObj] = useState( { name: 'Loading...', id: 'Loading...' } )

  useEffect( () => {
    getSelfUserObj( tempUserId )
      .then( ( gotSelfUserObj ) => {
      // console.log(gotSelfUserObj)
        setSelfUserObj( { name: gotSelfUserObj.name, id: gotSelfUserObj._id } )
      } )
      .catch( ( err ) => err )
  }, [] )

  return (
    <StyledSidebar>
      <h2>Sidebar</h2>
      <p>
        user id:
        {' '}
        { selfUserObj.id }
      </p>
      <p>
        user name:
        {' '}
        { selfUserObj.name }
      </p>
    </StyledSidebar>
  )
}

export default Sidebar
