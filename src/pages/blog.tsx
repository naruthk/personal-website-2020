import React from "react";
import { graphql } from "gatsby";

import Link from "../components/link";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

import { ROUTES } from "../utils/routes";
import { BlogPostsPageProps } from "../utils/types";
import { colors, mediaQuery } from "../utils/styles";

import styled from '@emotion/styled';

const PADDED_SPACE_MOBILE = "10px";
const PADDED_SPACE_DESKTOP = "1em";

const PostsListWrapper = styled.div`
  ${mediaQuery[2]} {
    margin: 20px 0 0 -${PADDED_SPACE_MOBILE};
  }
  margin: 20px 0 0 -${PADDED_SPACE_DESKTOP};
  display: flex;
  flex-wrap: wrap;
`;

const PostItemWrapper = styled.article`
  width: 100%;
  ${mediaQuery[1]} {
    width: 50%;
  }
  ${mediaQuery[2]} {
    width: 33.3%;
  }

  padding-left: ${PADDED_SPACE_MOBILE};
  margin-bottom: ${PADDED_SPACE_MOBILE};

  ${mediaQuery[2]} {
    padding-left: ${PADDED_SPACE_DESKTOP};
    margin-bottom: ${PADDED_SPACE_DESKTOP};
  }

  .image_wrapper {
    width: 100%;
    height: 150px;
    position: relative;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: fill;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 7px ${colors.lightGrey};
    border: 0.3em solid white;

    :hover {
      border: 0.3em solid ${colors.dark};
    }
  }
`;

const Title = styled.h2`
  margin-top: ${PADDED_SPACE_DESKTOP};
  font-weight: 500;
`;

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <Container bg={colors.white}>
        <h1>Blog</h1>
        <PostsListWrapper>
          {posts.map(post => {
            const { title, slug, excerpt, heroImage } = post.node;
            const url = `${ROUTES.BLOG.url}/${slug}`;
    
            return (
              <PostItemWrapper key={slug}>
                <div className="image_wrapper">
                  <Link href={url} title={title}>
                    <img src={heroImage.fixed.src} alt={title} />
                  </Link>
                </div>
                <Link href={url} title={title}><Title>{title}</Title></Link>
                <p>{excerpt.excerpt}</p>
              </PostItemWrapper>
            )
          })}
        </PostsListWrapper>
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
