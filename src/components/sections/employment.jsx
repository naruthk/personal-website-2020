/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";

// import Modal from "../ui/modal/modal";
import Link from "../link";
import { printReadbleDateRange } from "../../utils/dates";

const ContainerWrapper = styled.section`
  ${tw`max-w-screen-lg mx-auto mt-12 px-4`}
  ${tw`mt-10 md:mt-32`}
  .section-title {
    ${tw`lg:block tracking-wide uppercase font-bold text-lg xl:text-xl mb-4 opacity-75`}
  }
  .company-listing {
    ${tw`flex flex-wrap flex-row justify-around`}
  }
`;

const Company = styled.div`
  ${tw`px-4 pb-4 sm:w-1/3 text-center`}
  .logo {
    ${tw`w-full bg-contain bg-center bg-no-repeat h-10 sm:h-24`}
  }
  .position {
    ${tw`leading-tight text-gray-700 mt-4 mb-1`}
    :hover {
      ${tw`text-gray-800`}
    }
  }
  .date {
    ${tw`text-gray-500 text-sm`}
  }
  .greeting {
    ${tw`lg:block tracking-wide uppercase font-bold text-lg xl:text-xl mb-4 opacity-75`}
  }
`;

const Employment = () => {
  // const [isModalActive, setIsModalActive] = useState(false);
  // const [activeId, setActiveId] = useState(null);

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
              fluid(maxHeight: 100) {
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
          }
        }
      }
    }
  `);

  const items = data.allContentfulEmployments.edges;

  return (
    <ContainerWrapper>
      <h1 id="section-work" className="section-title">
        Work
      </h1>
      <div className="company-listing">
        {items.map(item => {
          const {
            slug,
            name,
            position,
            logo,
            isActive,
            employmentStartDate,
            employmentEndDate,
          } = item.node;

          return (
            <Company key={slug}>
              <div
                className="logo"
                style={{ backgroundImage: `url(${logo.fluid.src})` }}
              />
              <p className="position">
                <Link
                  key={slug}
                  title={name}
                  onClick={() => {
                    // setActiveId(slug);
                    // setIsModalActive(true);
                  }}
                >
                  {position}
                </Link>
              </p>
              <p className="date">
                {printReadbleDateRange({
                  startDate: employmentStartDate,
                  endDate: employmentEndDate,
                  isActive,
                })}
              </p>
            </Company>
          );
        })}
      </div>
      {/* {isModalActive && (
        <Modal
          id={activeId}
          isActive={isModalActive}
          setActive={setIsModalActive}
        >
          <div>
            {/* <h2>{name}</h2>
            <GatsbyImage fluid={logo.fluid} alt="Profile" />
            <h3>{position}</h3>
            <p>
              {printReadbleDateRange({
                startDate: employmentStartDate,
                endDate: employmentEndDate,
                isActive,
              })}
            </p>
            <p>Internship: {isInternship}</p>
            <p>Test</p>
          </div>
        </Modal>
      )} */}
    </ContainerWrapper>
  );
};

export default Employment;
