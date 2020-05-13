import React from "react"
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Container from "../container";
import { ROUTES } from "../../utils/routes";
import {
  mediaQuery,
  flexbox,
  layout,
  colors
} from "../../utils/styles";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Wrapper = styled.section`
  ${flexbox}
  ${layout}
  display: flex;
  flex-flow: row wrap;
  background: ${colors.white};
`;

const Item = styled.div`
  margin-bottom: 30px;
  ${mediaQuery[2]} {
    width: 50%;
  }
  h2 {
    font-weight: 500;
  }
`;

const BackgroundImage = styled.div`
  ${({ src }) =>
    src && css`
      background: url(${src}) center / cover no-repeat;
      height: 400px;
  `}
`;

const NUMBER_OF_PROJECTS_TO_FEATURED = 4;

const ProjectsListing = ({ items }) => (
  <>
    <Wrapper justifyContent="space-around">
      {items.slice(0, NUMBER_OF_PROJECTS_TO_FEATURED).map(item => {
        const {
          slug,
          title,
          excerpt,
          heroImage,
        } = item.node;
        
        return (
          <Item key={slug}>
            <BackgroundImage src={heroImage.fluid.src} /> 
            <Container>
              <Link to={`${ROUTES.PROJECT.url}/${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>{excerpt.excerpt}</p>
            </Container>
          </Item>
        )
      })}
    </Wrapper>
    
    <Wrapper justifyContent="space-evenly">
      <Link to={ROUTES.PROJECT.url}>
        <h4>View all projects -></h4>
      </Link>
    </Wrapper>
  </>
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
