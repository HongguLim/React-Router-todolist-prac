import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { removeTodo, switchTodo } from "../modules/todos";

export default function Todolist({ isActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {isActive ? "해야할일" : "완료된일"}
      {todos
        .filter((item) => item.isDone !== isActive)
        .map((item) => {
          return (
            <div
              key={item.id}
              style={{ border: "1px solid black", margin: "10px" }}
            >
              <p>제목:{item.title}</p>
              <p>내용:{item.contents}</p>
              <p>id:{item.id}</p>
              <button onClick={() => navigate(`/${item.id}`)}>
                [상세보기]
              </button>
              <button
                onClick={() => {
                  dispatch(switchTodo(item.id));
                }}
              >
                {item.isDone ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  dispatch(removeTodo(item.id));
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
}
