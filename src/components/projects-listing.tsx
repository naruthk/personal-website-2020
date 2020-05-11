import React from "react"
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Tags from "./tags";
import { ROUTES } from "../utils/routes";
import { prettyPrintDate } from "../utils/dates";
import {
  responsiveFontSizes,
  mediaQuery,
  flexbox,
  layout
} from "../utils/styles";

import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { DiGithubBadge } from 'react-icons/di';

const Wrapper = styled.section`
  ${flexbox}
  ${layout}
  display: flex;
  flex-flow: row wrap;
`;

const Item = styled.div`
  ${flexbox}
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 100%;

  ${mediaQuery[2]} {
    max-width: 480px;
  }

  ${mediaQuery[3]} {
    max-width: 600px;
  }

  h2 {
    font-weight: 500;
  }
`;

const BackgroundImage = styled.div`
  ${({ src }) =>
    src && css`
      background: url(${src}) left / cover no-repeat;
      width: 400px;
      :hover {
        background: url(${src}) center / cover no-repeat;
        width: 500px;
        border-radius: 20px;
      }
      transition: 1s all;
      height: auto;
      margin-right: 15px;
  `}
`;

const ExternalLink = styled.div`
  margin-top: 10px;
  a {
    font-size: ${responsiveFontSizes.large};
  }
`;

const Date = styled.div`
  margin-bottom: 10px;
  span {
    font-size: ${responsiveFontSizes.small};
  }
  .date--active {
    font-weight: 700;
  }
`;

const NUMBER_OF_PROJECTS_TO_FEATURED = 4;

const ProjectsListing = ({ items }) => (
  <>
    <Wrapper justifyContent="space-around">
      {items.slice(0, NUMBER_OF_PROJECTS_TO_FEATURED).map(item => {
        const {
          slug,
          title,
          category,
          url,
          excerpt,
          heroImage,
          isActive,
          initialStartDate,
          completionDate
        } = item.node;
        
        return (
          <Item key={slug}>
            <BackgroundImage src={heroImage.fixed.src} /> 
            <div>
              <Link to={`${ROUTES.PROJECT.url}/${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>{excerpt.excerpt}</p>
              <Date isActive={isActive}>
                <span>{prettyPrintDate({ timestamp: initialStartDate })}</span>
                <i> - </i>
                <span>
                  {isActive ? 
                    <i className="date--active">Present</i> : 
                    prettyPrintDate({ timestamp: completionDate })
                  }
                </span>
              </Date>
              <Tags items={category} />
              <ExternalLink>
                <a href={url} title={`${title} - GitHub Repository`}><DiGithubBadge /></a>
              </ExternalLink>
            </div>
          </Item>
        )
      })}
    </Wrapper>
    
    <Wrapper justifyContent="space-evenly">
      <Link to={ROUTES.PROJECT.url}>
        <h3>View all projects -></h3>
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
