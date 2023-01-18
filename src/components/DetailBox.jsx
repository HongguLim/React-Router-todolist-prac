import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";

function DetailBox() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const { data } = useQuery("todos", (item) =>
    axios.get(`http://localhost:4000/todos/`)
  );

  const todos = data?.data;

  const filteredTodos = todos?.filter(
    (item) => item.id === parseInt(params.id)
  );
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <StyledDiv>
      <h3>TODO 상세페이지</h3>
      <StyledTable>
        <tr>
          <StyledTh>KEY</StyledTh>
          <StyledTh>VALUE</StyledTh>
        </tr>
        <tr>
          <StyledTh>ID</StyledTh>
          <StyledTh>{filteredTodos && filteredTodos[0].id}</StyledTh>
        </tr>
        <tr>
          <StyledTh>TITLE</StyledTh>
          <StyledTh>{filteredTodos && filteredTodos[0].title}</StyledTh>
        </tr>
        <tr>
          <StyledTh>CONTENTS</StyledTh>
          <StyledTh>{filteredTodos && filteredTodos[0].contents}</StyledTh>
        </tr>
        <tr>
          <StyledTh>완료여부</StyledTh>
          <StyledTh>
            {filteredTodos && filteredTodos[0].isDone ? "완료" : "미완료"}
          </StyledTh>
        </tr>
      </StyledTable>
      <StyledButton onClick={handleButtonClick}>
        이전 페이지로 가기
      </StyledButton>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  background-color: #fff6e8;
  padding: 20px;
`;

const StyledTable = styled.table`
  border: 1px solid black;
  margin-bottom: 20px;
`;

const StyledTh = styled.th`
  border: 1px solid black;
  padding: 5px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: darkslategray;
  color: white;
  font-weight: 700;
  font-size: 17px;
  border: 0;
  border-radius: 13px;
  cursor: pointer;
`;
export default DetailBox;
