import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPosts;
    const { title, excerpt, heroImage, content } = post;

    return (
      <Layout>
        <SEO title={title} description={excerpt.excerpt} />
        <div>
          <h1>{title}</h1>
          <p><img src={heroImage.fluid.src} alt={heroImage.title} /></p>
          <p>{excerpt.excerpt}</p>
          <section>
            {documentToReactComponents(content.json, options)}
          </section>
        </div>
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
