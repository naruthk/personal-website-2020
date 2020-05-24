import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { DiJavascript1, DiHtml5, DiBootstrap, DiReact } from "react-icons/di";
import tw from "twin.macro";

import { TagPropTypes } from "../utils/types";

const TagsWrapper = styled.section`
  span {
    ${tw`inline-flex mr-2 align-middle items-center`}
    ${tw`rounded-full px-3 py-1 text-sm`}
    ${tw`bg-gray-200 text-gray-500`}
    :last-child {
      ${tw`m-0`}
    }
  }
  svg {
    ${tw`mr-2`}
  }
`;

const TAG_TO_ICON_MAP = {
  javascript: <DiJavascript1 />,
  html: <DiHtml5 />,
  bootstrap: <DiBootstrap />,
  react: <DiReact />,
};

function mapTagToIcon(tag) {
  const lowerCaseTag = tag.toLowerCase();
  return TAG_TO_ICON_MAP[lowerCaseTag] || null;
}

const TagsComponent = ({ items }) => (
  <TagsWrapper>
    {items.map(tag => (
      <span key={tag}>
        {mapTagToIcon(tag)} {`${tag}`}
      </span>
    ))}
  </TagsWrapper>
);

TagsComponent.propTypes = {
  items: PropTypes.arrayOf(TagPropTypes).isRequired,
};

export default TagsComponent;
