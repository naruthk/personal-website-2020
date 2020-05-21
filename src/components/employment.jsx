import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Controller, Scene } from "react-scrollmagic";

import { printReadbleDateRange } from "../utils/dates";

const ContainerWrapper = styled.section`
  ${tw`mt-20`}

  .zap {
    opacity: 1;
  }
`;

const Company = styled.div`
  transition: all 2s;
  opacity: 0.2;
`;

const Employment = () => {
  const data = useStaticQuery(graphql`
    query EmploymentQuery {
      allContentfulEmployments {
        edges {
          node {
            employmentStartDate
            isActive
            isInternship
            logo {
              fluid(maxWidth: 600) {
                src
              }
            }
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
          }
        }
      }
    }
  `);

  const items = data.allContentfulEmployments.edges;

  return (
    <ContainerWrapper>
      <h1>Work</h1>
      <div id="trigger" />
      <Controller>
        {items.map(item => {
          const {
            slug,
            name,
            excerpt,
            isActive,
            isInternship,
            employmentStartDate,
            employmentEndDate,
          } = item.node;

          return (
            <Scene
              key={slug}
              duration={150}
              triggerElement="#trigger"
              pin
              indicators
            >
              {(progress, event) => (
                <Company>
                  <p>
                    Pin Test {event.type} {progress}
                  </p>
                  <h1>{name}</h1>
                  <p>{excerpt.excerpt}</p>
                  {isInternship && <span>Internship</span>}
                  <p>
                    {printReadbleDateRange({
                      startDate: employmentStartDate,
                      endDate: employmentEndDate,
                      isActive,
                    })}
                  </p>
                </Company>
              )}
            </Scene>
          );
        })}
      </Controller>
      <div style={{ height: "30vh" }} />
    </ContainerWrapper>
  );
};

export default Employment;
