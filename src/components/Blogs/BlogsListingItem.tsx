import React from "react"
import { Link } from "gatsby";

import Taglines from "../taglines";

import { ROUTES } from "../../utils/routes";
import { prettyPrintDate } from "../../utils/dates";
import { BlogPost } from "../../utils/types";

import styled from '@emotion/styled';

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const BlogsListingItem = ({
  title,
  category,
  slug,
  excerpt,
  createdAt
}: BlogPost) => {
  return (
    <Section>
      <Link to={`${ROUTES.BLOG}/${slug}`} title={title}>
        <Title>{title}</Title>
      </Link>
      <p>{excerpt.excerpt}</p>
      <Taglines items={category} />
      <p>{prettyPrintDate({ timestamp: createdAt })}</p>
    </Section>
  );
};

export default BlogsListingItem;
