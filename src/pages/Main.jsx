import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Input from "../components/Input";
import Todolist from "../components/Todolist";

function Main() {
  const { data } = useQuery("todos", () =>
    axios.get("http://localhost:4000/todos")
  );

  return (
    <>
      <Input />
      <Todolist isActive={true} todos={data?.data} />
      <Todolist isActive={false} todos={data?.data} />
    </>
  );
}

export default Main;
