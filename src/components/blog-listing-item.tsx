import React from "react"
import { Link } from "gatsby";

import Tags from "./tags";

import { ROUTES } from "../utils/routes";
import { prettyPrintDate } from "../utils/dates";
import { BlogPost } from "../utils/types";
import { responsiveFontSizes } from "../utils/styles";

import styled from '@emotion/styled';

const Section = styled.article`
  margin: 20px 0;
  display: flex;
  flex-flow: row wrap;

  img {
    max-width: 200px;
    width: 100%;
    margin-right: 20px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Date = styled.span`
  /* font-size: ${responsiveFontSizes.small}; */
  margin-right: 30px;
`;

const BlogsListingItem = ({
  title,
  heroImage,
  category,
  slug,
  excerpt,
  createdAt
}: BlogPost) => {
  return (
    <Section>
      <div>
        <Link to={`${ROUTES.BLOG}/${slug}`} title={title}>
          <Title>{title}</Title>
        </Link>
        <p>{excerpt.excerpt}</p>
        <p>
          <Date>{prettyPrintDate({ timestamp: createdAt })}</Date>
          <Link to={`${ROUTES.BLOG}/${slug}`} title="Read more">
            Read more
          </Link> ->
        </p>
      </div>
    </Section>
  );
};

export default BlogsListingItem;
