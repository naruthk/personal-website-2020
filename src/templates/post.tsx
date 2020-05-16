import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FloatingHeader from "../components/ui/floating-header";
import ContentBodyRendererWrapper from "../components/ui/content-body-renderer";

import { prettyPrintDate } from "../utils/dates";
import { mediaQuery } from "../utils/styles";

import styled from "@emotion/styled";

const PostInformationContainer = styled.div`
  text-align: center;
  h1 {
    font-weight: 400;
    padding: 0 10px;
  }
  ${mediaQuery[2]} {
    width: 80%;
    padding: 20px;
    margin: auto;
  }
`;

const BlogPost = ({ location, data }) => {
  const {
    title,
    excerpt,
    heroImage,
    createdAt,
    body,
    tableOfContents
  } = data.contentfulBlogPosts;

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt.excerpt}
        metaImage={heroImage.resize}
        pathName={location.pathname}
      />
      <FloatingHeader title={title} pathName={location.pathname}/>
      <PostInformationContainer>
      <p className="post_content---date">{prettyPrintDate({ timestamp: createdAt })}</p>
        <h1>{title}</h1>
        <p className="post_information_center---label">{excerpt.excerpt}</p>
        <img src={heroImage.resize.src} alt={heroImage.title} />
      </PostInformationContainer>
      <ContentBodyRendererWrapper html={body.childMarkdownRemark.html} />
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
    body {
      childMarkdownRemark {
        html
        tableOfContents(absolute: false, maxDepth: 10)
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
    category
  }
}
`;
