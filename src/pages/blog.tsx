import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

import { ROUTES } from "../utils/routes";
import { prettyPrintDate } from "../utils/dates";
import { BlogPostsPageProps } from "../utils/types";
import { colors } from "../utils/styles";

import styled from '@emotion/styled';

const Section = styled.article`
  margin: 20px 0;
  display: flex;
  flex-flow: row wrap;

  img {
    max-width: 200px;
    width: 100%;
    margin-right: 20px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Date = styled.span`
  margin-right: 20px;
  border-right: 1px solid ${colors.yellow};
  padding-right: 20px;
`;

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <Container bg={colors.white}>
        <h1>Blog</h1>
        {posts.map(post => {
          const { title, slug, excerpt, createdAt } = post.node;
          const url = `${ROUTES.BLOG.url}/${slug}`;
          return (
            <Section key={slug}>
              <div>
                <Link to={url} title={title}>
                  <Title>{title}</Title>
                </Link>
                <p>{excerpt.excerpt}</p>
                <p>
                  <Date>{prettyPrintDate({ timestamp: createdAt })}</Date>
                  <Link to={url} title="Read more">
                    Read more
                  </Link> ->
                </p>
              </div>
            </Section>
          )
        })}
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
