import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import WelcomeText from "./welcome-text";
import styled from "@emotion/styled";

const AuthorProfileWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: normal;

  margin: 30px 0;
  
  .profile_photo {
    max-width: 100px;
    width: 100%;
  }

  div.profile_info {
    flex: 1;
    margin-left: 40px;
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
