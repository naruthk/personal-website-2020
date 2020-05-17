import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../components/layout";
import Link from "../components/link";
import SEO from "../components/seo";

import { ROUTES } from "../utils/routes";
import { colors } from "../utils/styles";

import styled from "@emotion/styled";
import { FaGithub } from 'react-icons/fa';
import tw from "twin.macro";

const ProjectItemWrapper = styled.div`
  ${tw`flex flex-wrap my-8`}
  div {
    ${tw`sm:w-full md:flex-1 md:pr-6`}
  }
  img {
    ${tw`w-full md:mx-0 shadow-lg md:border-white md:border-8 md:border-solid`}
    :hover {
      ${tw`shadow-xl`}
    }
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
                <h1><Link href={projectPageUrl}>{title}</Link></h1>
                <p>{excerpt.excerpt}</p>
                <Link className="cta" isExternal href={sourceCodeUrl} title={title}>
                    <FaGithub />
                </Link>
                <Link className="cta read-more" href={projectPageUrl} title="Read more">
                  Read more
                </Link>
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
