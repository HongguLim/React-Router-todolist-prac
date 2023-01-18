import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../modules/todos";

export default function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const queryClient = useQueryClient();

  const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4000/todos", newTodo);
  };

  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const addTodoButtonHander = async function () {
    console.log("hello");
    const newTodo = {
      title,
      contents,
      isDone: false,
    };
    await addMutation.mutate(newTodo);
    queryClient.invalidateQueries(["todos"]);
    setTitle("");
    setContents("");
  };

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
      <button onClick={addTodoButtonHander}>추가하기</button>
    </div>
  );
}
