import React from "react";

import styled from '@emotion/styled';
import { colors } from "../utils/styles";

const TaglinesWrapper = styled.section`
  span {
    padding: 5px 10px;
    border: 1px solid ${colors.lightGrey};
    color: ${colors.lightGrey};
    margin-right: 5px;
    display: inline-block;
  }
`;

const Taglines = ({ items }) => (
  <TaglinesWrapper>
    {items.map(tag => <span>{tag}</span>)}
  </TaglinesWrapper>
);

export default Taglines;
