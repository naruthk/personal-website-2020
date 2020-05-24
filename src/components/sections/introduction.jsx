import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import WelcomeText from "../ui/welcome-text";

const IntroWrapper = styled.div`
  ${tw`max-w-screen-lg mx-auto pt-8 pb-8 px-4 md:mt-8`}
  ${tw`flex flex-row flex-wrap items-center`}

  > div {
    ${tw`sm:flex-1`}
  }

  .welcome-text {
    flex-grow: 3;
  }

  .profile-photo {
    ${tw`flex-grow mx-auto mb-8 sm:ml-4 p-1 my-4`}
    ${tw`rounded-lg shadow-lg text-center z-0`}
    :hover {
      ${tw`shadow-xl transition-all duration-500`}
    }
    max-width: 250px;
  }
`;

const IntroductionSection = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      file(relativePath: { eq: "profile_photo.png" }) {
        absolutePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <IntroWrapper>
      <div className="welcome-text">
        <WelcomeText />
      </div>
      <div className="profile-photo">
        <GatsbyImage fluid={data.file.childImageSharp.fluid} alt="Profile" />
      </div>
    </IntroWrapper>
  );
};

export default IntroductionSection;
