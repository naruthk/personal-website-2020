import React from "react";
import styled from '@emotion/styled';

import { Tags } from "../utils/types";

import { DiJavascript1, DiHtml5, DiBootstrap, DiReact } from 'react-icons/di';
import tw from "twin.macro";

const TagsWrapper = styled.section`
  span {
    ${tw`py-1 px-2 mr-1 inline-flex cursor-default align-middle items-center text-sm`}
    ${tw`border border-solid`}
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
