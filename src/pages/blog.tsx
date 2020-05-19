import React from "react";
import { graphql } from "gatsby";

import Link from "../components/link";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

import { ROUTES } from "../utils/routes";
import { BlogPostsPageProps } from "../utils/types";
import { prettyPrintDate } from "../utils/dates";

import { css } from "@emotion/core";
import styled from '@emotion/styled';
import tw from "twin.macro";

const FeaturedPostsWrapper = styled.div`
  ${tw`flex flex-wrap`}
`;

const FeaturedPost = styled.div`
  ${tw`w-full sm:w-1/3 md:w-1/3 md:rounded overflow-hidden sm:shadow-md`}
  ${tw`border-b-8 border-gray-200 border-solid`}

  .hero-image {
    ${tw`w-full object-cover h-32 md:h-48`}
    ${tw`md:border-solid md:border-white md:border-4`}
  }

  .information {
    ${tw`sm:px-4 md:px-6 py-4 px-4`}

    .title {
      ${tw`text-xl mb-2`}
    }

    p { 
      ${tw`text-gray-600 text-sm sm:text-base`}
    }
  }
`;

const RemainingPostsWrapper = styled.div`
  ${tw`max-w-screen-md mx-4 lg:mx-auto mt-6`}
  > div {
    ${tw`mb-4 md:mb-8`}
  }
  .title {
    ${tw`text-lg md:text-left xl:text-xl text-gray-900 leading-normal mb-1`}
  }
  p { 
    ${tw`text-gray-600 text-sm sm:text-base`}
  }
  p.date {
    ${tw`mb-1 text-sm text-gray-500`}
  }
`;

const BlogComponentWrapper = styled.div`
  ${tw`max-w-screen-lg mx-auto`}
`;

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;
  const NUMBER_OF_FEATURED_POSTS = 3;

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <Container>
        <h2 css={css`${tw`mt-0`}`}>Blog</h2>
        <p css={css`${tw`md:mb-6 text-sm sm:text-base text-gray-600`}`}>I mostly write on topics related to web development and best practices with content about trending news and stories thrown into the mix occasionally.</p>
      </Container>
      <BlogComponentWrapper>
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
                      <h1 className="title">{title}</h1>
                      <p>{excerpt.excerpt}</p>
                    </div>
                  </Link>
                </FeaturedPost>
              )
            })}
        </FeaturedPostsWrapper>
        {posts.length > NUMBER_OF_FEATURED_POSTS && (
          <>
            <hr />
            <RemainingPostsWrapper>
              {posts.slice(NUMBER_OF_FEATURED_POSTS)
                .map(post => {
                  const { title, slug, excerpt, createdAt } = post.node;
                  const url = `${ROUTES.BLOG.url}/${slug}`;
          
                  return (
                    <Link href={url} title={title}>
                      <div key={slug}>
                        <p className="date">
                          {prettyPrintDate({ timestamp: createdAt })}
                        </p>
                        <h1 className="title">{title}</h1>
                        <p className="excerpt">{excerpt.excerpt}</p>
                      </div>
                    </Link>
                  )
                })}
            </RemainingPostsWrapper>
          </>
        )}
      </BlogComponentWrapper>
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
