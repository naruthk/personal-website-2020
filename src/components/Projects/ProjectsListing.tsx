import React from "react"
import { Link } from "gatsby";

import { ProjectItem } from "../../utils/types";
import { prettyPrintDate } from "../../utils/dates";

const ProjectsListing = ({ items }) => (
  <section>
    {items.map(item => {
      const {
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
        <div key={title}>
          <a href={url} title={title}><h1>{title}</h1></a>
          <p>{excerpt.exceprt}</p>
          <img src={heroImage.fixed.src} title={title} />
          <p>{prettyPrintDate({ timestamp: initialStartDate })} - {prettyPrintDate({ timestamp: completionDate })}</p>
          <p>{category.map(item => <span>{item}</span>)}</p>
        </div>
      )
    })}
  </section>
);

export default ProjectsListing;
