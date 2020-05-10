import React from "react"
import { graphql, Link } from "gatsby";
import { Container } from "../components/Container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ROUTES } from "../utils/routes";
import { CompaniesListing } from "../components/Companies";
import { ProjectsListing } from "../components/Projects";
import { HomePageProps } from "../utils/types";
import { colors } from "../utils/styles";
import styled from "@emotion/styled";

const BlogsList = styled.div`
  ul, li {
    margin: 0;
    padding: 0;
  }
`;

const HomePage = (props: HomePageProps) => {
  const {
    allContentfulBlogPosts: rawBlogPostsData,
    allContentfulProjects: rawProjectsData,
    allContentfulCompanies: rawCompaniesData,
  } = props.data;

  const renderBlogListingSection = () => (
    <Container bg={colors.white}>
      <h1>Blog</h1>
      <BlogsList>
        <ul>
        {rawBlogPostsData.edges.map(post => {
          const { title, slug, excerpt } = post.node;
        
          return (
            <li>
              <Link to={`${ROUTES.BLOG}/${slug}`} title={title}>
                <h3>{title}</h3>
              </Link>
              <p>{excerpt.excerpt}</p>
            </li>
          )
        })}
        </ul>
      </BlogsList>
    </Container>
  );

  return (
    <Layout showWelcomeText>
      <SEO title="Naruth Kongurai" />
      <ProjectsListing items={rawProjectsData.edges} />
      {renderBlogListingSection()}
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

