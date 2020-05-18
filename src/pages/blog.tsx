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

const FeaturedPostsWrapper = styled.div`
  ${tw`flex flex-wrap`}
`;

const FeaturedPost = styled.div`
  ${tw`w-full sm:w-1/2 md:w-1/3 mb-6 rounded overflow-hidden shadow-lg`}

  .hero-image {
    ${tw`w-full object-cover h-32 md:h-48`}
    ${tw`md:border-solid md:border-white md:border-4`}
  }

  .information {
    ${tw`px-2 md:px-6 py-4`}

    .title {
      ${tw`font-bold text-lg mb-2`}
    }

    p { 
      ${tw`text-gray-700 md:text-base`}
    }
  }
`;

const RemainingPostTitle = styled.h1`
  ${tw`text-base md:text-left xl:text-2xl text-gray900 leading-normal mt-6`}
`;

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;
  const NUMBER_OF_FEATURED_POSTS = 3;

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <Container>
        <h1>Blog</h1>
        <p>I mostly write on topics related to web development and best practices with content about trending news and stories thrown into the mix occasionally. 😉</p>
        <FeaturedPostsWrapper>
          {posts.slice(0, NUMBER_OF_FEATURED_POSTS)
            .map(post => {
              const { title, slug, excerpt, heroImage } = post.node;
              const url = `${ROUTES.BLOG.url}/${slug}`;
      
              return (
                <FeaturedPost key={slug}>
                  <Link href={url} title={title}>
                    <div className="hero-image" style={{ backgroundImage: `url(${heroImage.fixed.src})` }} />
                    <div className="information">
                      <div className="title">{title}</div>
                      <p>{excerpt.excerpt}</p>
                    </div>
                  </Link>
                </FeaturedPost>
              )
            })}
        </FeaturedPostsWrapper>
        <hr />
        <div>
          {posts.slice(NUMBER_OF_FEATURED_POSTS)
            .map(post => {
              const { title, slug, excerpt } = post.node;
              const url = `${ROUTES.BLOG.url}/${slug}`;
      
              return (
                <div key={slug}>
                  <Link href={url} title={title}>
                    <div className="information">
                      <RemainingPostTitle>{title}</RemainingPostTitle>
                      <p>{excerpt.excerpt}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
        </div>
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
