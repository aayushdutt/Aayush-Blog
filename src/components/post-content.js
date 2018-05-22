import React from 'react'
import Link from 'gatsby-link'

const PostContent = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.content }}> 
    
  </div>

);

export default PostContent


