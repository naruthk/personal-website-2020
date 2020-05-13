import React from "react";
import { graphql } from "gatsby";

import WelcomeText from "./welcome-text";
import styled from "@emotion/styled";

const AuthorProfileWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: normal;

  margin: 30px 0;
  
  img.profile_photo {
    max-width: 100px;
  }

  div.profile_info {
    flex: 1;
    margin-left: 20px;
  }
`;

const AuthorProfile = () => (
  <AuthorProfileWrapper>
    <img className="profile_photo" src="./src/images/profile_picture.jpg" alt="Avatar" />
    <div className="profile_info">
      <WelcomeText />
    </div>
  </AuthorProfileWrapper>
);

export default AuthorProfile;

export const pageQuery = graphql`
 query AuthorProfileInfo {
  contentfulBlogPosts {
    heroImage {
      fluid {
        src
      }
    }
  }
}
`;
