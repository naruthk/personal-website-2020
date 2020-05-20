import path from "path";

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.jsx`)
  const projectTemplate = path.resolve(`src/templates/project.jsx`)

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
        allContentfulProjects {
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

  result.data.allContentfulBlogPosts.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug
      },
    })
  })

  result.data.allContentfulProjects.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.slug}`,
      component: projectTemplate,
      context: {
        slug: edge.node.slug
      },
    })
  })
};
