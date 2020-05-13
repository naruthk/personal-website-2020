import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { HomePageBlogListing, HomePageProjectsListing } from "../components/Home";

import { HomePageProps } from "../utils/types";

const HomePage = (props: HomePageProps) => {
  const {
    allContentfulBlogPosts: rawBlogPostsData,
    allContentfulProjects: rawProjectsData
  } = props.data;

  return (
    <Layout showWelcomeText>
      <SEO title="Naruth Kongurai" />
      <HomePageProjectsListing items={rawProjectsData.edges} />
      <HomePageBlogListing items={rawBlogPostsData.edges} />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
 query HomePostsBySlug {
  allContentfulBlogPosts(sort: {order: DESC, fields: createdAt}, limit: 5) {
    edges {
      node {
        createdAt
        slug
        title
        category
        excerpt {
          excerpt
        }
      }
    }
  }
  allContentfulProjects(sort: {order: DESC, fields: initialStartDate}) {
    edges {
      node {
        title
        slug
        category
        url
        description {
          description
        }
        excerpt {
          excerpt
        }
        heroImage {
          fluid {
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

