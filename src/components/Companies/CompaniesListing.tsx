import React from "react"
import PropTypes from "prop-types";

import { Container } from "../Container";

import { colors } from "../../utils/styles";

const CompaniesListing = ({ items }) => {
  return (
    <Container bg={colors.white}>
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
    </Container>
  );
};

CompaniesListing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      companyName: PropTypes.string,
      employmentStartDate: PropTypes.string,
      position: PropTypes.string,
      companyUrl: PropTypes.string
    })
  )
}

export default CompaniesListing;
