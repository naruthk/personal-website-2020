import React from "react";
import styled from '@emotion/styled';
import { colors, responsiveFontSizes } from "../utils/styles";

import { Tags as TagProps } from "../utils/types";

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

const Tags = ({ items }: TagProps) => (
  <TagsWrapper>
    {items.map(tag => <span>{mapTagToIcon(tag)} {`${tag}`}</span>)}
  </TagsWrapper>
);

export default Tags;
