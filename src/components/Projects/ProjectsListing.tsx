import React from "react"
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Taglines from "../taglines";
import { ROUTES } from "../../utils/routes";
import { prettyPrintDate } from "../../utils/dates";
import { colors, breakpoints } from "../../utils/styles";

import styled from "@emotion/styled";
import { css } from "@emotion/core";


const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Item = styled.div`
  display: flex;
  flex-flow: row wrap;
  transition: 1s all;
  > div {
    padding: 20px;
  }
  margin: 30px auto;
`;

const BackgroundImage = styled.div`
  ${({ src }) =>
    src && css`
      background: url(${src}) left / cover no-repeat;
      width: 500px;
      height: auto;
  `}
`;

const VideoWrapper = styled.section`
  position: relative
`;

const AbsoluteDescription = styled.div`
  @media screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
  position: absolute;
  padding: 9px 30px;
  width: 300px;
  bottom: 0;
  right: 0;
  background-color: ${colors.white};
`;

const ProjectsListing = ({ items }) => (
  <Wrapper>
    {items.map(item => {
      const {
        slug,
        title,
        category,
        url,
        video,
        excerpt,
        heroImage,
        isActive,
        initialStartDate,
        completionDate
      } = item.node;
      
      return (
        <Item key={slug}>
          {video && (
            <>
              <VideoWrapper>
                <video src={video.file.url} autoPlay loop width="100%" />
                <AbsoluteDescription>
                  <h1>{title}</h1>
                  <p>{excerpt.excerpt}</p>
                </AbsoluteDescription>
              </VideoWrapper>
            </>
           ) || <BackgroundImage src={heroImage.fixed.src} /> }
          <div>
            <Link to={`${ROUTES.PROJECT}/${slug}`}><h1>{title}</h1></Link>
            <p>{excerpt.excerpt}</p>
            <p>
              {prettyPrintDate({ timestamp: initialStartDate })} {" - "} 
              {isActive ? "Present" : prettyPrintDate({ timestamp: completionDate })}</p>
            <Taglines items={category} />
            <p>GitHub Url: <a href={url} title={title}>Link</a></p>
          </div>
        </Item>
      )
    })}
  </Wrapper>
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
