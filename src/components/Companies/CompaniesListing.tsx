import React from "react"
import { Link } from "gatsby";

import { CompanyItem } from "../../utils/types";

const CompaniesListing = ({ items }) => {
  return (
    <section>
      {items.map(item => {
        const {
          slug,
          companyName,
          companyUrl,
          employmentStartDate,
          position,
          logo
        } = item.node;
        
        return (
          <div key={slug}>
            <a href={companyUrl} title={companyName}><h1>{companyName}</h1></a>
            <img src={logo.fixed.src} title={companyName} />
            <p>{position.position}</p>
            <p>{employmentStartDate} - </p>
          </div>
        )
      })}
    </section>
  );
};

export default CompaniesListing;
