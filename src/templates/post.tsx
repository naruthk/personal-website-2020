import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Tags from "../components/tags";
import SocialNetworkSharing from "../components/share";

import styled from "@emotion/styled";
import { prettyPrintDate } from "../utils/dates";
import { renderRichTextContent } from "../utils/RichTextRenderer";
import { SingleBlogPostPageProps } from "../utils/types";

const PostInformationContainer = styled.div`
  margin-bottom: 20px;
  h1 {
    text-align: center;
    font-weight: 300;
  }
  .post_information_center---label {
    font-style: italic;
  }
  img {
    transition: all 3s;
    :hover {
      border-radius: 20px;
    }
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
    img {
    transition: all 3s;
    :hover {
      border-radius: 20px;
    }
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
      <Container>
        <PostInformationContainer>
          <h1>{title}</h1>
          <p><img src={heroImage.fluid.src} alt={heroImage.title} /></p>
          <p className="post_information_center---label">{excerpt.excerpt}</p>
        </PostInformationContainer>
        <PostContentContainer>
          {renderRichTextContent(content.json)}
        </PostContentContainer>
        <hr />
        <SocialNetworkSharing
          data={{
            title,
            description: excerpt,
            thumbnail: heroImage.fluid.src
          }}
        />
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
