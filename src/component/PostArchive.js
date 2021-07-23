import { useEffect, useState } from 'react'
import styled from 'styled-components'
import getAllPostObjects from '../lib/post'

const PostArchive = () => {
  const Articles = styled.div`
    box-sizing: border-box;
    border: 2px solid brown;
    width: 70%;
    margin-top: 80px;
    padding: 20px;
  `

  const Article = styled.article`
    border: 1px solid green;
    padding: 10px;
    margin: 10px;
  `

  const [allPostObjects, setAllPostObjects] = useState( [{ title: 'Loading...' }] )
  useEffect( () => {
    getAllPostObjects()
      .then( ( gotAllPostObjects ) => {
        // console.log(gotAllPostObjects)
        setAllPostObjects( gotAllPostObjects )
      } )
      .catch( ( err ) => err )
  }, [] )

  return (
    <Articles>
      {allPostObjects.map( ( value ) => (
        <Article key={ value._id }>
          {value.title}
        </Article>
      ) )}
    </Articles>
  )
}
export default PostArchive
