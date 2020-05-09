import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "../components/Container";

import { renderRichTextContent } from "../utils/RichTextRenderer";

class BlogPost extends React.Component {
  render() {
    const {
      title,
      excerpt,
      heroImage,
      content
    } = this.props.data.contentfulBlogPosts;

    return (
      <Layout>
        <SEO title={title} description={excerpt.excerpt} />
        <Container>
          <h1>{title}</h1>
          <p><img src={heroImage.fluid.src} alt={heroImage.title} /></p>
          <p>{excerpt.excerpt}</p>
          <section>
            {renderRichTextContent(content.json)}
          </section>
        </Container>
      </Layout>
    )
  }
}

export default BlogPost;

export const pageQuery = graphql`
 query BlogPostsBySlug {
  contentfulBlogPosts {
    createdAt(formatString: "")
    slug
    title
    content {
      json
    }
    excerpt {
      excerpt
    }
    heroImage {
      fluid {
        src
      }
      fixed {
        src
      }
    }
  }
}
`;
