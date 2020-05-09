import React from "react";

import BlogsListingItem from "./BlogsListingItem";

const BlogsListing = ({ items }) => (
  <section>
    {items.map(post => <BlogsListingItem key={post.node.slug} {...post.node} />)}
  </section>
);

export default BlogsListing;
