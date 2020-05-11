import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import BlogsListingItem from "../components/blog-listing-item";

import { BlogPostsPageProps } from "../utils/types";
import { colors } from "../utils/styles";

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <Container bg={colors.white}>
        <h1>Blog</h1>
        {posts.map(post => <BlogsListingItem key={post.node.slug} {...post.node}/>)}
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
