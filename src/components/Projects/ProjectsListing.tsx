import React from "react"
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { ROUTES } from "../Routes";
import { prettyPrintDate } from "../../utils/dates";

const ProjectsListing = ({ items }) => (
  <section>
    {items.map(item => {
      const {
        slug,
        title,
        category,
        url,
        description,
        excerpt,
        heroImage,
        isActive,
        initialStartDate,
        completionDate
      } = item.node;
      
      return (
        <div key={slug}>
          <Link to={`${ROUTES.PROJECT}/${slug}`}><h1>{title}</h1></Link>
          <p>{excerpt.exceprt}</p>
          <img src={heroImage.fixed.src} title={title} />
          <p>{prettyPrintDate({ timestamp: initialStartDate })} - {prettyPrintDate({ timestamp: completionDate })}</p>
          <p>{category.map(item => <span>{item}</span>)}</p>
          <p>GitHub Url: <a href={url} title={title}>Link</a></p>
        </div>
      )
    })}
  </section>
);

ProjectsListing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      isActive: PropTypes.bool,
      initialStartDate: PropTypes.string,
      completionDate: PropTypes.string,
      category: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string
    })
  )
}

export default ProjectsListing;
