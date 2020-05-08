const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allContentfulBlogPosts {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create blog post pages.
  result.data.allContentfulBlogPosts.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`, // required
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug, // in react this will be the `:slug` part
      },
    })
  })
};
