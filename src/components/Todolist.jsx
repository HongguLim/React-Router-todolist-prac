import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useQueryClient } from "react-query";

export default function Todolist({ isActive, todos }) {
  // const fetchTodos = async () => {
  //   const { data } = await axios.get("http://localhost:4000/todos");
  //   setTodos(data);
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);
  const queryClient = useQueryClient();

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
              <button
                onClick={async () => {
                  await axios.patch(`http://localhost:4000/todos/${item.id}`, {
                    isDone: !item.isDone,
                  });
                  queryClient.invalidateQueries(["todos"]);
                }}
              >
                {item.isDone ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  axios.delete(`http://localhost:4000/todos/${item.id}`);
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

//   // 리액트쿼리 GET
//   const { isLoading, isError, data, error } = useQuery("todos", getTodos);

// // pending
//   if (isLoading) {
//     return <p>로딩중입니다...</p>;
//   }
// // reject
//   if (isError) {
//     console.log("error내용입니다", error);
//     return <p>오류가 발생했습니다</p>;
//   }

// // Delete
// const queryClient = new QueryClient();

// const removeTodoMutation = useMutation(removeTodo, {
//   onSuccess: () => {
//     queryClient.invalidateQueries("todos");
//   },
// });

// const switchTodoMutation = useMutation(switchTodo, {
//   onSuccess: () => {
//     console.log("성공");
//     queryClient.invalidateQueries("todos");
//   },
//   onError: () => {
//     console.log("실패");
//   },
// });
