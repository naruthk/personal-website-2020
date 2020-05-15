import React from "react";
import { graphql } from "gatsby";

import Link from "../components/link";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

import { ROUTES } from "../utils/routes";
import { colors, mediaQuery } from "../utils/styles";

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
    :first-of-type {
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
          const { title, excerpt, heroImage, slug, sourceCodeUrl } = post.node;
          const projectPageUrl = `${ROUTES.PROJECT.url}/${slug}`;

          return (
            <ProjectItemWrapper key={slug}>
              <div>
                <p><Link href={projectPageUrl} title={title}><img src={heroImage.fixed.src} alt={title} /></Link></p>
              </div>
              <div>
                <h2><Link href={projectPageUrl}>{title}</Link></h2>
                <p>{excerpt.excerpt}</p>
                <LinksWrapper>
                  <Link isExternal href={sourceCodeUrl} title={title}>
                    <FaGithub />
                  </Link>
                  <Link href={projectPageUrl} title="Read more">
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
        slug
        title
        excerpt {
          excerpt
        }
        heroImage {
          fixed {
            src
          }
        }
        sourceCodeUrl
        demoUrl
        category
        initialStartDate
        completionDate
      }
    }
  }
}
`;
