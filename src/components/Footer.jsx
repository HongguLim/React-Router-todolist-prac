import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #e8ffee;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledAnchor = styled.a`
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
`;

function Footer() {
  return (
    <StyledDiv>
      <StyledAnchor>개인정보처리방침</StyledAnchor>
      <StyledAnchor>서비스 이용약관</StyledAnchor>
      <StyledAnchor>환불 규정</StyledAnchor>
      <StyledAnchor>고객센터</StyledAnchor>
    </StyledDiv>
  );
}

export default Footer;
