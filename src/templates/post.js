import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "../components/Container";
import { prettyPrintDate } from "../utils/dates";
import { renderRichTextContent } from "../utils/RichTextRenderer";
import Tags from "../components/tags";
import SocialNetworkSharing from "../components/share";

class BlogPost extends React.Component {
  render() {
    const {
      title,
      excerpt,
      heroImage,
      category,
      createdAt,
      updatedAt,
      content
    } = this.props.data.contentfulBlogPosts;

    return (
      <Layout>
        <SEO title={title} description={excerpt.excerpt} />
        <Container>
          <h1>{title}</h1>
          <p>{prettyPrintDate({ timestamp: createdAt })} | Last updated: {prettyPrintDate({ timestamp: updatedAt })}</p>
          <p>{excerpt.excerpt}</p>
          <p><img src={heroImage.fluid.src} alt={heroImage.title} /></p>
          <section>
            {renderRichTextContent(content.json)}
          </section>
          <hr />
          <Tags items={category} />
          <p>If you enjoy reading this article, please share it with others. That would mean the world to me 💌</p>
          <SocialNetworkSharing data={this.props.data.contentfulBlogPosts} />
        </Container>
      </Layout>
    )
  }
}

export default BlogPost;

export const pageQuery = graphql`
 query BlogPostsBySlug($slug: String!) {
  contentfulBlogPosts(slug: { eq: $slug }) {
    createdAt
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
    }
    updatedAt
    category
  }
}
`;
