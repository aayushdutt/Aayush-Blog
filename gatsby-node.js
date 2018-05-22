//helps to create the extra pages from md file and allot them to the path '/$path' (taken from frontmatter)

const path = require('path');
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
         
          //this createPage function creates the actual page. 
          createPage({
            path: node.frontmatter.path, //this allots the path '/__'
            component: blogPostTemplate, //this is the template of the created page. All above queries was to create those pages. This defines what goes into those individual pages.
            context: {} // additional data can be passed via context
          });
        });
    });
}