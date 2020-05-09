import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { BlogsListing } from "../components/Blogs";
import { CompaniesListing } from "../components/Companies";
import { ProjectsListing } from "../components/Projects";
import { HomePageProps } from "../utils/types";

import { BlogsListingItem } from "../components/Blogs";
import { Container } from "../components/Container";

const HomePage = (props: HomePageProps) => {
  const {
    allContentfulBlogPosts: rawBlogPostsData,
    allContentfulProjects: rawProjectsData,
    allContentfulCompanies: rawCompaniesData,
  } = props.data;

  return (
    <Layout isLargeHeader={true}>
      <SEO title="Naruth Kongurai" />
      <ProjectsListing items={rawProjectsData.edges} />
      <BlogsListing items={rawBlogPostsData.edges} />
      <CompaniesListing items={rawCompaniesData.edges} />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
 query HomePostsBySlug {
  allContentfulCompanies {
    edges {
      node {
        slug
        companyName
        employmentStartDate
        companyUrl
        position { 
          position
        }
        logo {
          fixed {
            src
          }
        }
      }
    }
  }
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

