import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Share from "../components/share";
import Tags from "../components/tags";

import { SingleProjectPageProps } from "../utils/types";
import { prettyPrintDate } from "../utils/dates";
import { renderRichTextContent } from "../utils/RichTextRenderer";

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
`;

const Meta = styled.div`
  ${mediaQuery[2]} {
    text-align: right;
  }
  h4 {
    span {
      display: block;
      font-size: smaller;
      color: ${colors.yellowDark};
      padding-top: 10px;
      margin-top: 10px;
      border-top: 1px solid ${colors.yellow};
    }
  }
`;

const Project = ({ data }: SingleProjectPageProps) => {
  const {
    title,
    category,
    url,
    description,
    excerpt,
    heroImage,
    initialStartDate,
    completionDate
  } = data.contentfulProjects;

  return (
    <Layout>
      <SEO title={title} description={excerpt.excerpt} />
      <Container>
        <h1>{title}</h1>
      </Container>
      <img src={heroImage.fluid.src} alt={heroImage.title} />
      <Container bg={colors.white}>
        <ContentWrapper>
          <div>
            <h2>{title}</h2>
            <p>{excerpt.excerpt}</p>
            <p><a href={url} title={title}>GitHub Repository</a></p>
            <Tags items={category} />
          </div>
          <Meta>
            <h4>
              {prettyPrintDate({ timestamp: initialStartDate })} - {prettyPrintDate({ timestamp: completionDate })}
              <span>Date of Completion</span>
              </h4>
            <Share
              isDark={true}
              data={{
                title,
                description: excerpt,
                thumbnail: heroImage.fluid.src
              }}
            />
          </Meta>
        </ContentWrapper>
        <section>
          {renderRichTextContent(description.json)}
        </section>
      </Container>
    </Layout>
  )
};

export default Project;

export const pageQuery = graphql`
 query ProjectsBySlug($slug: String!) {
  contentfulProjects(slug: { eq: $slug }) {
    title
    category
    url
    description {
      json
    }
    excerpt {
      excerpt
    }
    heroImage {
      fluid {
        src
      }
    }
    initialStartDate
    completionDate
  }
}
`;
