import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Link from "../components/link";
import SEO from "../components/seo";
import Tags from "../components/tags";
import FloatingHeader from "../components/ui/floating-header";
import ContentBodyRendererWrapper from "../components/ui/content-body-renderer";

import { prettyPrintDate } from "../utils/dates";

import styled from "@emotion/styled";
import tw from "twin.macro";

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

const HeroImage = styled.img`
  ${tw`shadow-lg sm:mb-2 mb-6`}
`;

const Meta = styled.div`
  ${tw`md:text-right`}
  .date-label {
    ${tw`inline-flex text-xs pt-1 mb-1 text-gray-600 uppercase`}
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
    isCurrentlyActive
  } = data.contentfulProjects;

  return (
    <Layout location={location}>
      <SEO
        title={title}
        description={excerpt.excerpt}
        metaImage={heroImage.resize}
        pathName={location.pathname}
      />
      <FloatingHeader title={title} pathName={location.pathname}/>
      <HeroImage src={heroImage.resize.src} alt={heroImage.title} />
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
            <p className="date-label">Date of Completion</p>
            <p className="date">
              {prettyPrintDate({ timestamp: initialStartDate })}
              {" - "}
              {isCurrentlyActive ? "Present" : prettyPrintDate({ timestamp: completionDate })}
            </p>
            <Tags items={category} />
          </Meta>
        </div>
      </ContentWrapper>
      <ContentBodyRendererWrapper html={body.childMarkdownRemark.html} />
    </Layout>
  )
};

export default Project;

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
      resize(width: 1200) {
        src
        width
        height
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
