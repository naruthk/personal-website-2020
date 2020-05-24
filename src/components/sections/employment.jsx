/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import GatsbyImage from "gatsby-image";

import Modal from "../modal/modal";
import MarkdownRenderer from "../renderer/markdown";
import { printReadbleDateRange } from "../../utils/dates";

const ContainerWrapper = styled.section`
  ${tw`max-w-screen-lg mx-auto mt-12 px-4`}
  ${tw`mt-10 md:mt-32`}
  .section-title {
    ${tw`lg:block tracking-wide uppercase font-bold text-lg xl:text-xl mb-12 opacity-75`}
  }
  .company-listing {
    ${tw`flex flex-wrap flex-row justify-around`}
  }
`;

const EmploymentInformation = styled.div`
  .position {
    ${tw`leading-tight text-gray-700 mt-4 mb-1`}
  }
  .date {
    ${tw`text-gray-500 text-sm mb-0`}
  }
`;

const Company = styled.div`
  ${tw`px-4 py-2 w-full sm:w-1/3 text-center cursor-pointer mt-2`}
  ${tw`border-b-2 border-solid border-white`}
  ${tw`transition-all duration-500`}
  :hover {
    ${tw`border-b-2 border-solid border-gray-200`}
  }
  .logo {
    ${tw`w-full bg-contain bg-center bg-no-repeat h-10 sm:h-16`}
  }
  .position {
    ${tw`leading-tight text-gray-700 mt-4 mb-1`}
  }
  .date {
    ${tw`text-gray-500 text-sm`}
  }
`;

const DetailModalContentWrapper = styled.div`
  ${tw`sm:flex max-w-screen-lg mx-auto`}
  > div {
    ${tw`md:w-1/2`}
  }
  .information {
    ${tw`mx-4`}
    .caption {
      ${tw`text-sm text-gray-500`}
    }
  }
  .project-photo {
    ${tw`w-full shadow-lg rounded-lg my-4`}
  }
  .description {
    ${tw`flex-grow text-sm text-gray-600`}
  }
`;

const Employment = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const data = useStaticQuery(graphql`
    query EmploymentQuery {
      allContentfulEmployments(
        sort: { order: DESC, fields: employmentStartDate }
      ) {
        edges {
          node {
            isActive
            isInternship
            logo {
              fluid(maxHeight: 200) {
                ...GatsbyContentfulFluid
              }
            }
            position
            name
            slug
            companyUrl
            address {
              lon
              lat
            }
            excerpt {
              excerpt
            }
            description {
              childMarkdownRemark {
                html
              }
            }
            employmentStartDate
            employmentEndDate
            assets {
              fluid(maxHeight: 300) {
                ...GatsbyContentfulFluid
              }
              description
            }
          }
        }
      }
    }
  `);

  const items = data.allContentfulEmployments.edges;

  const renderActiveModal = () => {
    const {
      slug,
      name,
      position,
      description,
      employmentStartDate,
      employmentEndDate,
      isActive,
      assets,
    } = selectedCompany.node;

    return (
      <Modal id={slug} isActive={isModalActive} setActive={setIsModalActive}>
        <DetailModalContentWrapper>
          <div className="information">
            {assets &&
              assets.map(photo => (
                <>
                  <div className="project-photo">
                    <GatsbyImage fluid={photo.fluid} alt={name} />
                  </div>
                  <p className="caption">{photo.description}</p>
                </>
              ))}
            <EmploymentInformation>
              <h2 className="title">{name}</h2>
              <p className="position">{position}</p>
              <p className="date">
                {printReadbleDateRange({
                  startDate: employmentStartDate,
                  endDate: employmentEndDate,
                  isActive,
                })}
              </p>
            </EmploymentInformation>
          </div>
          <div className="description">
            <MarkdownRenderer html={description.childMarkdownRemark.html} />
          </div>
        </DetailModalContentWrapper>
      </Modal>
    );
  };

  return (
    <ContainerWrapper>
      <h1 id="section-work" className="section-title">
        Work
      </h1>
      <div className="company-listing">
        {items.map(item => {
          const {
            slug,
            position,
            logo,
            isActive,
            employmentStartDate,
            employmentEndDate,
          } = item.node;

          return (
            <Company
              key={slug}
              onClick={() => {
                setSelectedCompany(item);
                setIsModalActive(true);
              }}
            >
              <div
                className="logo"
                style={{ backgroundImage: `url(${logo.fluid.src})` }}
              />
              <EmploymentInformation>
                <p className="position">{position}</p>
                <p className="date">
                  {printReadbleDateRange({
                    startDate: employmentStartDate,
                    endDate: employmentEndDate,
                    isActive,
                  })}
                </p>
              </EmploymentInformation>
            </Company>
          );
        })}
      </div>
      {isModalActive && renderActiveModal()}
    </ContainerWrapper>
  );
};

export default Employment;
