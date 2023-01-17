import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../modules/todos";

export default function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div style={{ backgroundColor: "coral" }}>
      제목:
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      내용:{" "}
      <input
        type="text"
        value={contents}
        onChange={(event) => setContents(event.target.value)}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          const newTodo = {
            // id: uuidv4(),
            title,
            contents,
            isDone: false,
          };
          axios.post("http://localhost:4000/todos", newTodo);

          setTitle("");
          setContents("");
        }}
      >
        추가하기
      </button>
    </div>
  );
}

// const queryClient = useQueryClient();

// const mutation = useMutation(addTodo, {
//   onSucess: ()=> {

//     // Query Invalidation - useQuery로 읽었던 todos 데이터들이 더이상 최신이 아니어서 invalidate 할것이다 선언하는것
//     // 이렇게 써주면 다시 todos를 불러오게 됨
//     queryClient.invalidateQueries('todos');

//   },
// })

// if (mutation.isSuccess) {
// console.log('matation', mutation);
// }
