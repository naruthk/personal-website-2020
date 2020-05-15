import React from "react";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styled from "@emotion/styled";

const UIList = styled.ul`
  margin: 0;
  padding: 0;
  li {
    margin-left: 40px;
    padding-left: 10px;
    overflow-x: visible !important;
    overflow-y: visible !important;
  }
`;

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.UL_LIST]: (_, children) => <UIList>{children}</UIList>,
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>
  },
};

export const renderRichTextContent = json => documentToReactComponents(json, options);