import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Link from "../components/link";
import SEO from "../components/seo";
import Container from "../components/container";
import Tags from "../components/tags";
import FloatingHeader from "../components/ui/floating-header";
import ContentBodyRendererWrapper from "../components/ui/content-body-renderer";

import { prettyPrintDate } from "../utils/dates";
import { colors, mediaQuery } from "../utils/styles";

import styled from "@emotion/styled";

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 50px;
  width: 100%;

  > div {
    margin: 20px 0;
  }

  ${mediaQuery[2]} {
    > div {
      width: 50%;
      padding: 0 30px 0 0;
    }
  }

  .content_wrapper---link {
    background-color: ${colors.orange};
    color: ${colors.white};
    padding: .1rem .3rem .2rem;
    border-radius: .2rem;

    :hover {
      background-color: ${colors.blue};
    }
  }
`;

const Meta = styled.div`
  ${mediaQuery[2]} {
    text-align: right;
  }
  h4 {
    margin-bottom: 0;
  }
  span.date {
    display: inline-flex;
    font-size: smaller;
    color: ${colors.yellowDark};
    padding-top: 10px;
    margin: 10px 0;
    border-top: 1px solid ${colors.yellow};
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
    completionDate
  } = data.contentfulProjects;

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt.excerpt}
        metaImage={heroImage.resize}
        pathName={location.pathname}
      />
      <FloatingHeader title={title} pathName={location.pathname}/>
      <Container>
        <h1>{title}</h1>
      </Container>
      <img src={heroImage.resize.src} alt={heroImage.title} />
      <Container>
        <ContentWrapper>
          <div>
            <h2>{title}</h2>
            <p>{excerpt.excerpt}</p>
            <p>
              <Link
                isExternal
                className="content_wrapper---link"
                href={sourceCodeUrl}
                title={`${title} - GitHub`}
              >
                View source code on GitHub ->
              </Link>
            </p>
            {demoUrl && (
              <p>
                <Link
                  isExternal
                  className="content_wrapper---link"
                  href={demoUrl}
                  title={`${title} - Demo`}
                >
                  Demo ->
                </Link>
              </p>
            )}
          </div>
          <Meta>
            <h4>
              {prettyPrintDate({ timestamp: initialStartDate })} - {prettyPrintDate({ timestamp: completionDate })}
            </h4>
            <span className="date">Date of Completion</span>
            <Tags items={category} />
          </Meta>
        </ContentWrapper>
      </Container>
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
  }
}
`;
