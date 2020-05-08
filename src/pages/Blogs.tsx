// Gatsby supports TypeScript natively!
import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { BlogPostsPageProps } from "../utils/types";

const BlogsListingPage = (props: BlogPostsPageProps) => {
  const posts = props.data.allContentfulBlogPosts.edges;

  return (
    <Layout>
      <SEO title="Blog Posts" />

      {posts.map(post => {
        const { title, heroImage, slug, excerpt } = post.node;
        return (
          <div key={slug}>
            <Link to={`/${slug}`}><h1>{title}</h1></Link>
            <img src={heroImage.fixed.src} alt={title} />
            <p>{excerpt.excerpt}</p>
          </div>
        )
      })}
    </Layout>
  );
};

export default BlogsListingPage;

export const pageQuery = graphql`
{
  allContentfulBlogPosts {
    edges {
      node {
        createdAt(formatString: "")
        slug
        title
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
