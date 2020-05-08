import React from "react";
import { graphql } from "gatsby";

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPosts;
    const { title, excerpt, heroImage, content } = post;

    return (
      <div>
        <h1>{title}</h1>
        <p><img src={heroImage.fluid.src} alt={heroImage.title} /></p>
        <p>{excerpt.excerpt}</p>
        {/* TO-DO: Post content */}
      </div>
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
