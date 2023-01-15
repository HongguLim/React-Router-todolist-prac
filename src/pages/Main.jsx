import React from "react";
import Input from "../components/Input";
import Todolist from "../components/Todolist";

function Main() {
  return (
    <>
      <Input />
      <Todolist isActive={true} />
      <Todolist isActive={false} />
    </>
  );
}

export default Main;
