import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "../components/Container";
import { BlogsListing } from "../components/Blogs";
import { BlogPostsPageProps } from "../utils/types";

import { colors } from "../utils/styles";

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <BlogsListing items={posts} />
      {/* <Container bg={colors.white}> */}
        {/* {posts.map(post => <BlogsListingItem {...post.node} />)} */}
      {/* </Container> */}
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
