// Gatsby supports TypeScript natively!
import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { BlogsListingItem } from "../components/Blogs";
import { BlogPostsPageProps } from "../utils/types";

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;

  return (
    <Layout>
      <SEO title="Blog Posts" />
      {/* {posts.map(post => <BlogsListingItem {...post.node} />)} */}
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
