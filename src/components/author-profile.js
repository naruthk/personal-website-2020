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
  
  div.profile_info {
    width: 100%;

    ${mediaQuery[2]} {
      flex: 1;
      margin-left: 40px;
    }
  }
`;

const ProfilePhotoWrapper = styled.div`
  margin: auto;
  ${mediaQuery[2]} {
    margin-left: 15px;
  }
	width: 100px;
	border: 5px white solid;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 0 5px 15px 0px rgba(174, 174, 174, 0.6);
	transform: translatey(0px);

	img {
    width: 100%;
    height: auto; 
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
      <ProfilePhotoWrapper>
        <Img
          fluid={data.authorProfileImage.childImageSharp.fluid}
          alt="Avatar"
        />
      </ProfilePhotoWrapper>
      <div className="profile_info">
        <WelcomeText />
      </div>
    </AuthorProfileWrapper>
  )
};

export default AuthorProfile;
