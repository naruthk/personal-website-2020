import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { prettyPrintDate } from "../utils/dates";
import { renderRichTextContent } from "../utils/RichTextRenderer";

class Project extends React.Component {
  render() {
    const {
      title,
      category,
      url,
      description,
      excerpt,
      heroImage,
      initialStartDate,
      completionDate
    } = this.props.data.contentfulProjects;

    return (
      <Layout>
        <SEO title={title} description={excerpt.excerpt} />
        <div>
          <h1>{title}</h1>
          <section>
            <p>{prettyPrintDate({ timestamp: initialStartDate })}</p>
            <p>{prettyPrintDate({ timestamp: completionDate })}</p>
            <p>{category.map(item => <span>{item}</span>)}</p>
            <p><a href={url} title={title}>GitHub Repo</a></p>
          </section>
          <p><img src={heroImage.fixed.src} alt={heroImage.title} /></p>
          <p>{excerpt.excerpt}</p>
          <section>
            {renderRichTextContent(description.json)}
          </section>
        </div>
        <p>Hi</p>
      </Layout>
    )
  }
};

export default Project;

export const pageQuery = graphql`
 query ProjectsBySlug {
  contentfulProjects {
    title
    category
    url
    description {
      json
    }
    excerpt {
      excerpt
    }
    heroImage {
      fixed {
        src
      }
    }
    initialStartDate
    completionDate
  }
}
`;
