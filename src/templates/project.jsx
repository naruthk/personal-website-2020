import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { BsCalendar } from "react-icons/bs";
import GatsbyImage from "gatsby-image";

import Layout from "../components/layout";
import Link from "../components/link";
import SEO from "../components/seo";
import Tags from "../components/tags";
import ContentBodyRendererWrapper from "../components/ui/content-body-renderer";
import { printReadbleDateRange } from "../utils/dates";
import { ProjectItem, LocationPropTypes } from "../utils/types";

const ContentWrapper = styled.div`
  ${tw`md:my-4 w-full border-b-8 border-solid border-gray-100`}
  .container {
    ${tw`max-w-screen-lg mx-auto pt-8 pb-8 px-4 sm:mt-0 md:mt-6 flex flex-row flex-wrap`}
  }
  div {
    ${tw`sm:w-full md:flex-1 my-4`}
  }
  .title {
    ${tw`text-gray-900`}
  }
  .excerpt {
    ${tw`text-xl md:text-left md:text-lg lg:text-xl xl:text-2xl leading-normal`}
  }
  .link {
    ${tw`text-blue-600 opacity-100`}
    &::after {
      content: "->";
      ${tw`pl-2`}
    }
  }
`;

const HeroImage = styled.div`
  ${tw`shadow-lg w-full sm:max-w-screen-lg mb-6 md:rounded-lg mx-auto`}
`;

const Meta = styled.div`
  ${tw`md:text-right`}
  .date-label {
    ${tw`inline-flex text-xs pt-1 mb-1 text-gray-500 uppercase`}
  }
  .icon {
    ${tw`mr-3 self-center text-gray-400`}
  }
  .date {
    ${tw`mb-4`}
  }
`;

const Project = ({ location, data }) => {
  const {
    title,
    category,
    body,
    excerpt,
    sourceCodeUrl,
    demoUrl,
    heroImage,
    initialStartDate,
    completionDate,
    isCurrentlyActive,
  } = data.contentfulProjects;

  return (
    <Layout location={location} pageTitle={title} showStickyHeader>
      <SEO
        title={title}
        description={excerpt.excerpt}
        metaImage={heroImage.resize}
        pathName={location.pathname}
      />
      <HeroImage>
        <GatsbyImage fluid={heroImage.fluid} alt={heroImage.title} />
      </HeroImage>
      <ContentWrapper>
        <div className="container">
          <div>
            <h1 className="title">{title}</h1>
            <p className="excerpt">{excerpt.excerpt}</p>
            <p>
              <Link
                isExternal
                className="link"
                href={sourceCodeUrl}
                title={`${title} - GitHub`}
              >
                View source code on GitHub
              </Link>
            </p>
            {demoUrl && (
              <p>
                <Link
                  isExternal
                  className="link"
                  href={demoUrl}
                  title={`${title} - Demo`}
                >
                  Demo
                </Link>
              </p>
            )}
          </div>
          <Meta>
            <p className="date-label">
              <span className="icon">
                <BsCalendar />
              </span>
              Date of Completion
            </p>
            <p className="date">
              {printReadbleDateRange({
                startDate: initialStartDate,
                endDate: completionDate,
                isActive: isCurrentlyActive,
              })}
            </p>
            <Tags items={category} />
          </Meta>
        </div>
      </ContentWrapper>
      <ContentBodyRendererWrapper html={body.childMarkdownRemark.html} />
    </Layout>
  );
};

export default Project;

Project.propTypes = {
  data: ProjectItem.isRequired,
  location: LocationPropTypes.isRequired,
};

export const pageQuery = graphql`
  query ProjectsBySlug($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      category
      body {
        childMarkdownRemark {
          html
        }
      }
      excerpt {
        excerpt
      }
      heroImage {
        fluid(maxWidth: 1024) {
          ...GatsbyContentfulFluid
        }
      }
      sourceCodeUrl
      demoUrl
      initialStartDate
      completionDate
      isCurrentlyActive
    }
  }
`;
