import React from "react"
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { CompaniesListing } from "../components/Companies";
import { HomePageProps } from "../utils/types";

const HomePage = (props: HomePageProps) => {
  const {
    allContentfulProjects: rawProjectsData,
    allContentfulCompanies: rawCompaniesData
  } = props.data;

  const projects = rawProjectsData.edges;
  const companies = rawCompaniesData.edges;

  console.log(companies)

  return (
    <Layout>
      <SEO title="Home" />
      <CompaniesListing items={companies} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/Blogs/">Go to Blog</Link>
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
  allContentfulProjects {
    edges {
      node {
        title
        isActive
        completionDate
        initialStartDate
        url
      }
    }
  }
}
`;

