import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

import { colors } from "../utils/styles";

const ProjectsListingPage = ({ data }) => {
  const posts = data.allContentfulProjects.edges;

  return (
    <Layout>
      <SEO title="Projects" />
      <Container bg={colors.white}>
        <h1>Projects</h1>
        {posts.map(post => {
          const { title } = post.node;
          return (
            <p>{title}</p>
          )
        })}
      </Container>
    </Layout>
  );
};

export default ProjectsListingPage;

export const pageQuery = graphql`
{
  allContentfulProjects(sort: {order: DESC, fields: initialStartDate}) {
    edges {
      node {
        title
        slug
        category
        url
        excerpt {
          excerpt
        }
        heroImage {
          fixed {
            src
          }
        }
        video {
          file {
            url
          }
        }
        isActive
        initialStartDate
        completionDate
      }
    }
  }
}
`;
