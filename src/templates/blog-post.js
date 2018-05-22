//this is the template for each created blog post page

import React from "react";
import Helmet from "react-helmet";
import SubHeader from "../components/sub-header"
import PostContent from "../components/post-content"

export default function Template({
  data 
}) {
  const post = data.markdownRemark;
  let imageName = "about-bg.jpg"
  if(post.frontmatter.imageName) imageName = post.frontmatter.imageName;   
  return (
    <div>
     <Helmet title={`${post.frontmatter.title}`} />
      <SubHeader title={post.frontmatter.title} subtitle="hey" imageFolder="img" imageName={imageName}/>
      <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <PostContent content={post.html } />
              </div>
            </div>
          </div>
      </article>
      <hr />
    </div>
  );
}


export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;

