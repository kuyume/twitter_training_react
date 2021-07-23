import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { useEffect, useState } from 'react'
// import { getSelfUserObj } from '../lib/user'

const Header = () => {
  const StyledHeader = styled.header`
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    background-color: #fff;
    border: 2px solid red;
    position: fixed;
    top:0;
    left: 0;
  `

  const tempUserId = '60ec1ed6a56c19643c998bc3'

  // const [selfUserObj, setSelfUserObj] = useState()

  // useEffect(() => {
  //   getSelfUserObj( tempUserId )
  //   .then(( gotSelfUserObj ) => {
  //     setSelfUserObj( gotSelfUserObj )
  //   })
  //   .catch(( err ) => {
  //     setSelfUserObj( err )
  //   })
  // }, [])

  return (
    <StyledHeader>
      Your ID :
      {tempUserId}
      <Link to="/">TOP</Link>
      <Link to="/post">POSTS</Link>
    </StyledHeader>
  )
}
export default Header
