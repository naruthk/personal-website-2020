import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa";
import tw from "twin.macro";
import GatsbyImage from "gatsby-image";

import Container from "../components/container";
import Layout from "../components/layout";
import Link from "../components/link";
import SEO from "../components/seo";
import { ROUTES } from "../utils/routes";
import { colors } from "../utils/styles";
import { ProjectItem } from "../utils/types";

const ProjectItemWrapper = styled.div`
  ${tw`flex flex-wrap mb-12`}
  div {
    ${tw`w-full sm:flex-1 md:flex-1 md:pr-6`}
  }
  .title {
    ${tw`lg:text-2xl text-xl mb-2`}
  }
  .excerpt {
    ${tw`text-gray-500 text-sm sm:text-base leading-tight`}
  }
  .cta {
    ${tw`mr-6 inline-flex opacity-75`}
    :first-of-type {
      border-right: 1px solid ${colors.yellow};
      ${tw`pr-4 align-middle`}
    }
    :hover {
      ${tw`opacity-100`}
    }
  }
  .read-more {
    &::after {
      content: "->";
      ${tw`pl-2`}
    }
  }
`;

const HeroImageWrapper = styled.div`
  ${tw`w-full mb-4 md:mb-0 sm:mr-4`}
  img {
    ${tw`shadow-lg`}
  }
`;

const ProjectsListingPage = ({ data }) => {
  const posts = data.allContentfulProjects.edges;

  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <h2
          css={css`
            ${tw`mt-0`}
          `}
        >
          Projects
        </h2>
        {posts.map(post => {
          const { title, excerpt, heroImage, slug, sourceCodeUrl } = post.node;
          const projectPageUrl = `${ROUTES.PROJECTS.url}/${slug}`;

          return (
            <ProjectItemWrapper key={slug}>
              <HeroImageWrapper>
                <Link href={projectPageUrl} title={title}>
                  <GatsbyImage fluid={heroImage.fluid} alt={title} />
                </Link>
              </HeroImageWrapper>
              <div>
                <h1 className="title">
                  <Link href={projectPageUrl} title={title}>
                    {title}
                  </Link>
                </h1>
                <p className="excerpt">{excerpt.excerpt}</p>
                <Link
                  className="cta"
                  isExternal
                  href={sourceCodeUrl}
                  title={title}
                >
                  <FaGithub />
                </Link>
                <Link
                  className="cta read-more"
                  href={projectPageUrl}
                  title="Read more"
                >
                  Read more
                </Link>
              </div>
            </ProjectItemWrapper>
          );
        })}
      </Container>
    </Layout>
  );
};

export default ProjectsListingPage;

ProjectsListingPage.propTypes = {
  data: PropTypes.shape({
    allContentfulProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(ProjectItem),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  {
    allContentfulProjects(sort: { order: DESC, fields: initialStartDate }) {
      edges {
        node {
          slug
          title
          excerpt {
            excerpt
          }
          heroImage {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
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
