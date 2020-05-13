import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import WelcomeText from "./welcome-text";
import { mediaQuery } from "../utils/styles";

import styled from "@emotion/styled";

const AuthorProfileWrapper = styled.div`
  text-align: center;

  ${mediaQuery[2]} {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  margin: 30px 0;
  
  .profile_photo {
    max-width: 100px;
    width: 100%;
    margin: auto;
  }

  div.profile_info {
    width: 100%;

    ${mediaQuery[2]} {
      flex: 1;
      margin-left: 40px;
    }
  }
`;

const AuthorProfile = () => {
  const data = useStaticQuery(graphql`
    query {
      authorProfileImage: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AuthorProfileWrapper>
      <Img
        className="profile_photo" 
        fluid={data.authorProfileImage.childImageSharp.fluid}
        alt="Avatar"
      />
      <div className="profile_info">
        <WelcomeText />
      </div>
    </AuthorProfileWrapper>
  )
};

export default AuthorProfile;
