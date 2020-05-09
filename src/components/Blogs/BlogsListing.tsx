import React from "react";

import BlogsListingItem from "./BlogsListingItem";

const BlogsListing = ({ items }) => (
  <section>
    {items.map(post => <BlogsListingItem {...post.node} />)}
  </section>
);

export default BlogsListing;
