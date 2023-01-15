import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #e8ffee;
  padding: 20px;
  font-size: larger;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;

const StyledP = styled.p`
  margin: 0;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledP>Sparta Coding Club</StyledP>
      <StyledP>TODO APP</StyledP>
    </StyledHeader>
  );
}

export default Header;
