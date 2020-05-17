import React from "react";
import { graphql } from "gatsby";

import Link from "../components/link";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

import { ROUTES } from "../utils/routes";
import { BlogPostsPageProps } from "../utils/types";

import styled from '@emotion/styled';
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`flex flex-wrap`}
`;

const Unit = styled.article`
  ${tw`w-full sm:w-1/2 md:w-1/3 pr-4`}
`;

const ImageWrapper = styled.div`
  ${tw`relative w-full`}
  height: 170px;

  img {
    ${tw`absolute top-0 left-0 w-full h-full shadow-md object-fill`}
  }
`;

const Title = styled.h1`
  ${tw`text-xl md:text-left md:text-lg lg:text-xl xl:text-2xl text-gray900 leading-normal mt-6`}
`;

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <Container>
        <h1>Blog</h1>
        <Wrapper>
          {posts.map(post => {
            const { title, slug, excerpt, heroImage } = post.node;
            const url = `${ROUTES.BLOG.url}/${slug}`;
    
            return (
              <Unit key={slug}>
                <ImageWrapper>
                  <Link href={url} title={title}>
                    <img src={heroImage.fixed.src} alt={title} />
                  </Link>
                </ImageWrapper>
                <Link href={url} title={title}><Title>{title}</Title></Link>
                <p>{excerpt.excerpt}</p>
              </Unit>
            )
          })}
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default BlogsListingPage;

export const pageQuery = graphql`
{
  allContentfulBlogPosts(sort: {order: DESC, fields: createdAt}) {
    edges {
      node {
        createdAt
        slug
        title
        category
        heroImage {
          fixed {
            src
            width
            height
          }
        }
        excerpt {
          excerpt
        }
      }
    }
  }
}
`;
