import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

export default function Todolist({ isActive, todos }) {
  const queryClient = useQueryClient();

  const switchButtonHandler = async (item) => {
    await axios.patch(`http://localhost:4000/todos/${item.id}`, {
      isDone: !item.isDone,
    });
    queryClient.invalidateQueries(["todos"]);
  };

  const deleteButtonHandler = async (item) => {
    await axios.delete(`http://localhost:4000/todos/${item.id}`, {});
    queryClient.invalidateQueries(["todos"]);
  };

  return (
    <div>
      {isActive ? "해야할일" : "완료된일"}
      {todos
        ?.filter((item) => item.isDone !== isActive)
        .map((item) => {
          return (
            <div
              key={item.id}
              style={{ border: "1px solid black", margin: "10px" }}
            >
              <p>제목:{item.title}</p>
              <p>내용:{item.contents}</p>
              <p>id:{item.id}</p>
              <button onClick={() => Navigate(`/${item.id}`)}>
                [상세보기]
              </button>
              <button onClick={() => switchButtonHandler(item)}>
                {item.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => deleteButtonHandler(item)}>삭제</button>
            </div>
          );
        })}
    </div>
  );
}
