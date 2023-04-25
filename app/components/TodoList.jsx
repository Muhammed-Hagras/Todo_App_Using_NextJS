"use client";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { getAllTodos } from "@/api";

export default async function TodoList() {
  //
  const todos = await getAllTodos();

  return (
    <div>
      <div className="overflow-x-auto text-center">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr className="p-14">
              <th>#</th>
              <th>Todos</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
