import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

export default function TodoItem({ todo }) {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalCheck, setOpenModalCheck] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [editodoText, setEditodoText] = useState("");
  const router = useRouter();

  const checkTodoHandler = async () => {
    const newTodo = await editTodo({
      id: todo.id,
      text: todo.text,
      isDone: true,
    });
    setOpenModalCheck(false);
    router.refresh();
  };

  const editTodoHandler = async (e) => {
    e.preventDefault();
    const newTodo = await editTodo({
      id: todo.id,
      text: editodoText,
    });
    setEditodoText("");
    setOpenModalEdit(false);
    router.refresh();
  };

  const deleteHandler = async (id) => {
    await deleteTodo(id);
    setOpenModal(false);
    router.refresh();
  };

  const todoId = todo.id.slice(0, 5);
  return (
    <tr className="text-center">
      <td>{todoId}</td>
      <td className={`${todo.isDone ? "line-through" : ""}`}>{todo.text}</td>

      <td className="flex gap-5 justify-center">
        {/* Check Todo */}
        <AiFillCheckCircle
          cursor="pointer"
          size={25}
          className="text-green-500"
          onClick={() => setOpenModalCheck(true)}
        />
        <Modal openModal={openModalCheck} setOpenModal={setOpenModalCheck}>
          <div className="flex gap-4">
            <p className="mt-3">
              Are you sure that you want to check this task done ?
            </p>
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => checkTodoHandler(todo)}
            >
              ok
            </button>
          </div>
        </Modal>

        {/* Edit Todo */}
        <AiFillEdit
          cursor="pointer"
          size={25}
          className="text-yellow-500"
          onClick={() => setOpenModalEdit(true)}
        />
        <Modal openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
          <form
            onSubmit={(todo) => editTodoHandler(todo)}
            className="flex gap-4"
          >
            <input
              value={editodoText}
              onChange={(e) => setEditodoText(e.target.value)}
              type="text"
              placeholder="Type here"
              style={{ outline: "none" }}
              className="input input-bordered w-fit max-w-xs"
            />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </Modal>

        {/* Delete Todo */}
        <BsTrashFill
          cursor="pointer"
          size={25}
          className="text-red-500"
          onClick={() => setOpenModalDelete(true)}
        ></BsTrashFill>
        <Modal openModal={openModalDelete} setOpenModal={setOpenModalDelete}>
          <div className="flex gap-4">
            <p className="mt-3">
              Are you sure that you want to delete this task ?
            </p>
            <button
              type="submit"
              className="btn btn-error"
              onClick={() => deleteHandler(todo.id)}
            >
              ok
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
}
