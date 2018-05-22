import React from "react";

import Link from 'gatsby-link'
import SubHeader from '../components/sub-header'


export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  var postsList = posts.map( ({node}) => {
    var path = node.frontmatter.path;
    return (
      <div key={node.frontmatter.path}>
        <div className="post-preview"><Link to={path}>
          <h2 className="post-title">{node.frontmatter.title}</h2>
          <p className="post-excerpt">{node.excerpt}</p></Link>
          <p className="post-meta">Posted by <Link to="/about">Aayush Dutt</Link> on {node.frontmatter.date}</p>
        </div>
        <hr />
      </div>
    )
  })

  console.log(posts)

  return (
      <div>
        <SubHeader title="Aayush Dutt" subtitle="It's Me"  imageFolder="img" imageName="about-bg.jpg" />
        {/* Main Content*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
            
              {postsList}
              {/* Pager*/}
              <div className="clearfix"><Link to="#" className="btn btn-primary float-right">Older Posts →</Link></div>
            </div>
          </div>
        </div>
        <hr />
      </div>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;