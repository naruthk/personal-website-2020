import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import FloatingHeader from "../components/ui/floating-header";
import AuthorProfile from "../components/author-profile";

import { prettyPrintDate } from "../utils/dates";
import { mediaQuery, colors, MAX_WIDTH} from "../utils/styles";

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

const PostContentContainer = styled.article`
  h1, h2, h3, h4 {
    padding-top: 30px;
    font-weight: 500;
  }
  padding: 20px;
  background-color: ${colors.white};

  p.post_content---date {
    text-align: center;
  }

  ${mediaQuery[2]} {
    width: 70%;
    max-width: ${MAX_WIDTH};
    padding: 40px;
    margin: -100px auto 0 auto;
  }
`;

const BlogPost = ({ location, data }) => {
  const {
    title,
    excerpt,
    heroImage,
    createdAt,
    body
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
      <PostContentContainer>
        <div
          className="post_content---body"
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
          }}
        />
        <hr />
        <p className="post_content---date">{prettyPrintDate({ timestamp: createdAt })}</p>
      </PostContentContainer>
      <Container>
         <AuthorProfile />
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
    category
  }
}
`;
