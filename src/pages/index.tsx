import React from "react"
import { graphql, Link } from "gatsby";

import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectsListing from "../components/projects-listing";
import Waves from "../components/ui/waves";

import { ROUTES } from "../utils/routes";
import { HomePageProps } from "../utils/types";
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
    <Container>
      <Link to={ROUTES.BLOG.url} title="Blog"><h1>Latest Posts</h1></Link>
      <BlogsList>
        <ul>
        {rawBlogPostsData.edges.map(post => {
          const { title, slug, excerpt } = post.node;
        
          return (
            <li key={slug}>
              <Link to={`${ROUTES.BLOG.url}/${slug}`} title={title}>
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
      <Waves />
      {renderBlogListingSection()}
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

