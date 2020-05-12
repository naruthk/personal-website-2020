import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Tags from "../components/tags";
import SocialNetworkSharing from "../components/share";
import FloatingHeader from "../components/ui/floating-header";

import styled from "@emotion/styled";
import { prettyPrintDate } from "../utils/dates";
import { mediaQuery, colors } from "../utils/styles";
import { renderRichTextContent } from "../utils/RichTextRenderer";
import { SingleBlogPostPageProps } from "../utils/types";

const PostInformationContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
  h1 {
    font-weight: 300;
  }
  .post_information_center---label {
    font-style: italic;
  }
  ${mediaQuery[2]} {
    width: 80%;
    padding: 20px;
    margin: auto;
  }
`;

const PostMetaContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: normal;
  margin-top: 20px;
`;

const PostContentContainer = styled.article`
  h1, h2, h3, h4 {
    padding-top: 30px;
    font-weight: 500;
  }
`;

const BlogPost = ({ data }: SingleBlogPostPageProps) => {

  const {
    title,
    excerpt,
    heroImage,
    category,
    createdAt,
    updatedAt,
    content
  } = data.contentfulBlogPosts;

  return (
    <Layout>
      <SEO title={title} description={excerpt.excerpt} />
      <FloatingHeader
        title={title}
        sharingStructData={{
          title,
          description: excerpt,
          thumbnail: heroImage.fluid.src
        }}/>
      <PostInformationContainer>
        <h1>{title}</h1>
        <p className="post_information_center---label">{excerpt.excerpt}</p>
        <p><img src={heroImage.fluid.src} alt={heroImage.title} /></p>
      </PostInformationContainer>
      <Container bg={colors.white}>
        <PostContentContainer>
          {renderRichTextContent(content.json)}
        </PostContentContainer>
        <hr />
        <PostMetaContainer>
          <p>{prettyPrintDate({ timestamp: createdAt })} | Last updated: {prettyPrintDate({ timestamp: updatedAt })}</p>
          <Tags items={category} />
        </PostMetaContainer>
      </Container>
    </Layout>
  )
};

export default BlogPost;

export const pageQuery = graphql`
 query BlogPostsBySlug($slug: String!) {
  contentfulBlogPosts(slug: { eq: $slug }) {
    createdAt
    slug
    title
    content {
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
    updatedAt
    category
  }
}
`;
