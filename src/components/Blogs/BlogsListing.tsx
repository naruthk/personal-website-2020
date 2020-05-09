import React from "react";

import BlogsListingItem from "./BlogsListingItem";
import { Container } from "../Container";

import { colors } from "../../utils/styles";
import styled from '@emotion/styled';

const Title = styled.div`
  padding-bottom: 20px;
`;

const BlogsListing = ({ items }) => (
  <Container>
    <Title><h1>Blog</h1></Title>
    {items.map(post =>
      <BlogsListingItem
        key={post.node.slug}
        {...post.node}
      />)
    }
  </Container>
);

export default BlogsListing;
