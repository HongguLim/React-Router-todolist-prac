import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../modules/todos";

export default function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();

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
            id: uuidv4(),
            title,
            contents,
            isDone: false,
          };
          dispatch(addTodo(newTodo));

          setTitle("");
          setContents("");
        }}
      >
        추가하기
      </button>
    </div>
  );
}
