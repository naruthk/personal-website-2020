import React from "react"
import { Link } from "gatsby";

import { prettyPrintDate } from "../../utils/dates";
import { BlogPost } from "../../utils/types";
import { ROUTES } from "../../components/Routes";

const BlogsListingItem = ({
  title,
  heroImage,
  category,
  slug,
  excerpt,
  createdAt
}: BlogPost) => {
  return (
    <section>
      <div>
        <Link to={`${ROUTES.BLOG}/${slug}`}><h1>{title}</h1></Link>
        <p>{category.map(item => <span>{item}</span>)}</p>
        <p>{prettyPrintDate({ timestamp: createdAt })}</p>
        {heroImage && <img src={heroImage.fixed.src} alt={title} />}
        <p>{excerpt.excerpt}</p>
      </div>
    </section>
  );
};

export default BlogsListingItem;
