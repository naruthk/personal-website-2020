import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

import { ROUTES } from "../utils/routes";
import { colors, mediaQuery } from "../utils/styles";

import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "@emotion/styled";

import { FaGithub } from 'react-icons/fa';

const ProjectItemWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 30px 0;

  ${mediaQuery[2]} {
    > div {
      width: 50%;
      padding: 0 30px 0 0;
    }
  }
`;

const LinksWrapper = styled.p`
  a {
    margin-right: 20px;
    :first-child {
      border-right: 1px solid ${colors.yellow};
      padding-right: 20px;
      vertical-align: middle;
    }
  }
`;

const ProjectsListingPage = ({ data }) => {
  const posts = data.allContentfulProjects.edges;

  return (
    <Layout>
      <SEO title="Projects" />
      <Container bg={colors.white}>
        <h1>Projects</h1>
        {posts.map(post => {
          const { title, excerpt, heroImage, slug, url } = post.node;
          const projectPageUrl = `${ROUTES.PROJECT.url}/${slug}`;
          return (
            <ProjectItemWrapper>
              <div>
                <p><img src={heroImage.fixed.src} alt={title} /></p>
              </div>
              <div>
                <h2><Link to={projectPageUrl}>{title}</Link></h2>
                <p>{excerpt.excerpt}</p>
                <LinksWrapper>
                  <OutboundLink href={url} title={title}><FaGithub /></OutboundLink>
                  <Link to={projectPageUrl} title="Read more">
                    Read more ->
                  </Link>
                </LinksWrapper>
              </div>
            </ProjectItemWrapper>
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
