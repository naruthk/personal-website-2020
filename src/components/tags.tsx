import React from "react";
import styled from '@emotion/styled';
import { colors, responsiveFontSizes } from "../utils/styles";

import { Tags } from "../utils/types";

import { DiJavascript1, DiHtml5, DiBootstrap, DiReact } from 'react-icons/di';

const TagsWrapper = styled.section`
  span {
    padding: 5px 10px;
    border: 1px solid ${colors.lightGrey};
    color: ${colors.lightGrey};
    margin-right: 5px;
    display: inline-block;
    font-size: ${responsiveFontSizes.small};
    cursor: default;
  }
  svg {
    vertical-align: middle;
  }
`;

const TAG_TO_ICON_MAP = {
  javascript: <DiJavascript1 />,
  html: <DiHtml5 />,
  bootstrap: <DiBootstrap />,
  react: <DiReact />
};

function mapTagToIcon(tag) {
  const lowerCaseTag = tag.toLowerCase();
  return TAG_TO_ICON_MAP[lowerCaseTag] || null;
};

interface TagsComponentProps {
  items: [Tags];
}

const TagsComponent = ({ items }: TagsComponentProps) => (
  <TagsWrapper>
    {items.map(tag => <span key={tag}>{mapTagToIcon(tag)} {`${tag}`}</span>)}
  </TagsWrapper>
);

export default TagsComponent;
