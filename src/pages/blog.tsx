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

const Title = styled.h1`
  ${tw`text-xl md:text-left md:text-lg lg:text-xl xl:text-2xl text-gray900 leading-normal mt-6`}
`;

const Post = styled.div`
  ${tw`w-full sm:w-1/2 md:w-1/3 md:mr-4 mb-6 rounded overflow-hidden shadow-lg`}

  .hero-image {
    ${tw`w-full object-cover h-32 md:h-48`}
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
              <Post key={slug}>
                <div className="hero-image" style={{ backgroundImage: `url(${heroImage.fixed.src})` }} />
                <div className="information">
                  <div className="title">{title}</div>
                  <p>{excerpt.excerpt}</p>
                </div>
                {/* <ImageWrapper>
                  <Link href={url} title={title}>
                    <img src={heroImage.fixed.src} alt={title} />
                  </Link>
                </ImageWrapper>
                <Link href={url} title={title}><Title>{title}</Title></Link>
                <p>{excerpt.excerpt}</p> */}
              </Post>
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
