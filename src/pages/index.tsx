import React from "react"
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { BlogsListing } from "../components/Blogs";
import { CompaniesListing } from "../components/Companies";
import { ProjectsListing } from "../components/Projects";
import { HomePageProps } from "../utils/types";

const HomePage = (props: HomePageProps) => {
  const {
    allContentfulBlogPosts: rawBlogPostsData,
    allContentfulProjects: rawProjectsData,
    allContentfulCompanies: rawCompaniesData,
  } = props.data;

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/Blogs/">Blog</Link>
      <hr />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <BlogsListing items={rawBlogPostsData.edges} />
      <CompaniesListing items={rawCompaniesData.edges} />
      <ProjectsListing items={rawProjectsData.edges} />
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
  allContentfulProjects {
    edges {
      node {
        title
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
        isActive
        initialStartDate
        completionDate
      }
    }
  }
}
`;

