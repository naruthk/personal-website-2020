import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import Container from "../container";

import { ROUTES } from "../../utils/routes";
import styled from '@emotion/styled';

const BlogsList = styled.div`
  padding: 10px 0;
  a { font-weight: 400; }
`;

const HomePageBlogListing = ({ items }) => (
  <Container>
    <h1>Latest Posts</h1>
    {items.map(post => {
      const { title, slug, excerpt } = post.node;
    
      return (
        <BlogsList key={slug}>
          <h3>
            <Link to={`${ROUTES.BLOG.url}/${slug}`} title={title}>
              {title}
            </Link>
          </h3>
          <p>{excerpt.excerpt}</p>
        </BlogsList>
      )
    })}
  </Container>
);

HomePageBlogListing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      excerpt: PropTypes.shape({
        excerpt: PropTypes.string
      }),
    })
  )
};

export default HomePageBlogListing;
