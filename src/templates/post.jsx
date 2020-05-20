import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import FloatingHeader from "../components/ui/floating-header";
import ContentBodyRendererWrapper from "../components/ui/content-body-renderer";
import Tags from "../components/tags";
import { prettyPrintDate } from "../utils/dates";
import { LocationPropTypes, BlogItem } from "../utils/types";

const PostInformationContainer = styled.div`
  ${tw`md:mb-6`}
  h1 {
    ${tw`lg:block font-semibold text-left md:text-left text-3xl md:text-2xl lg:text-3xl xl:text-5xl leading-none mb-6 xl:mb-8`}
  }
  .date {
    ${tw`uppercase lg:block tracking-wide uppercase font-bold text-lg xl:text-xl mb-4 opacity-75`}
  }
  .excerpt {
    ${tw`text-xl md:text-left md:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-normal`}
  }
`;

const HeroImage = styled.img`
  ${tw`shadow-lg w-full sm:max-w-screen-lg mb-6 md:rounded-lg`}
`;

const BlogPost = ({ data, location }) => {
  const {
    title,
    excerpt,
    heroImage,
    createdAt,
    body,
    category,
  } = data.contentfulBlogPosts;

  return (
    <Layout location={location}>
      <SEO
        title={title}
        description={excerpt.excerpt}
        metaImage={heroImage.resize}
        pathName={location.pathname}
      />
      <FloatingHeader title={title} pathName={location.pathname} />
      <Container>
        <PostInformationContainer>
          <p className="date">{prettyPrintDate({ timestamp: createdAt })}</p>
          <h1>{title}</h1>
          <p className="excerpt">{excerpt.excerpt}</p>
        </PostInformationContainer>
      </Container>
      <HeroImage src={heroImage.resize.src} alt={heroImage.title} />
      <ContentBodyRendererWrapper html={body.childMarkdownRemark.html} />
      <Container>
        <Tags items={category} />
      </Container>
    </Layout>
  );
};

export default BlogPost;

BlogPost.propTypes = {
  data: BlogItem.isRequired,
  location: LocationPropTypes.isRequired,
};

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
